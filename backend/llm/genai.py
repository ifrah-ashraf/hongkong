import google.generativeai as genai
import textwrap
from decouple import config

MAX_CHAR_LENGTH = 10000  
CHUNK_WRAP = 9000        
GEMINI_MODEL = "models/gemini-flash-latest"
GEMINAI_API = config("GEMINI_API")

genai.configure(api_key=GEMINAI_API)

model = genai.GenerativeModel(GEMINI_MODEL)

def summarize_chunk(chunk: str) -> str:
    prompt = (
        f"""You are an intelligent AI meeting assistant. The following is a multilingual transcript (may contain English, Chinese, or other languages).\n\n
        Your task is to analyze the transcript properly and generate a **one-page structured summary** that includes:\n
        1. A **brief overview** of the discussion topics.\n
        2. **Key action items** or decisions made.\n
        3. A **short multilingual remark**, ONLY IF multilingual content played a significant role in communication.\n\n
        - Do NOT elaborate excessively on language usage or transcription errors.\n
        - If audio or transcript has issues, mention them briefly in **a single short sentence**.\n
        - Keep the summary clear, organized, and concise — suitable for a single-page report.\n\n
        Transcript:\n\"\"\"\n{chunk}\n\"\"\""""
    )

    response = model.generate_content(prompt)
    return response.text

def summarize_large_transcript(transcript: str) -> str:
    if len(transcript) <= MAX_CHAR_LENGTH:
        return summarize_chunk(transcript)

    #split transcript into chunks
    chunks = textwrap.wrap(transcript, CHUNK_WRAP, break_long_words=False, replace_whitespace=False)

    summaries = []
    for idx, chunk in enumerate(chunks):
        print(f"Summarizing chunk {idx+1}/{len(chunks)}...")
        summary = summarize_chunk(chunk)
        summaries.append(summary.strip())

    # Combine all partial summaries into a final one
    final_prompt = (
    "You are an AI assistant. Below are summaries from different chunks of a multilingual meeting transcript.\n\n"
    "Your task is to merge these into a clean, **single-page summary** with the following sections:\n"
    "1. **Discussion Overview**\n"
    "2. **Key Action Points**\n"
    "3. **Brief Multilingual Note** (if relevant — keep it under two lines).\n\n"
    "Avoid repetition. Be brief and professional.\n\n"
    f"Summaries:\n\n{chr(10).join(summaries)}"
)

    final_response = model.generate_content(final_prompt)
    return final_response.text
