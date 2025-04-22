from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
import os
import torch
from transformers import AutoModelForSpeechSeq2Seq, AutoProcessor, pipeline
from pydub import AudioSegment
import uuid
import io


device = "cuda:0" if torch.cuda.is_available() else "cpu"
torch_dtype = torch.float16 if torch.cuda.is_available() else torch.float32

model_id = "openai/whisper-small"
print("Model ID:", model_id)
model = AutoModelForSpeechSeq2Seq.from_pretrained(
    model_id,
    torch_dtype=torch_dtype,
    low_cpu_mem_usage=True,
    use_safetensors=True
).to(device)

processor = AutoProcessor.from_pretrained(model_id)

pipe = pipeline(
    "automatic-speech-recognition",
    model=model,
    tokenizer=processor.tokenizer,
    feature_extractor=processor.feature_extractor,
    torch_dtype=torch_dtype,
    device=0 if torch.cuda.is_available() else -1,
    return_timestamps=True,
    return_language=True
)

# here we are spliting the audio in 60s in memory not saving into file
# and them reading it to reduce the overhead
def split_audio(audio_path, chunk_length_ms=60_000):
    audio = AudioSegment.from_file(audio_path)
    chunks = [audio[i:i + chunk_length_ms] for i in range(0, len(audio), chunk_length_ms)]
    return chunks

def transcribe_chunks(chunks):
    full_transcription = ""
    for i, chunk in enumerate(chunks):

        buffer = io.BytesIO()
        chunk.export(buffer, format="wav")
        buffer.seek(0)

        print(f"Processing chunk {i+1}/{len(chunks)}")

        audio_bytes = buffer.read()
        result = pipe(audio_bytes) 
        full_transcription += result["text"] + " "
    
    return full_transcription.strip()
