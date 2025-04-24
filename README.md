# AI Summary Agent

A multilingual meeting transcription and summarization agent.  
Built with a **FastAPI backend** powered by **Whisper (for transcription)** and **Gemini API (for summarization)**, and a **Next.js frontend**.The result is a pdf which highlights the main point of meeting with clarity.

## Features

-  Transcribes audio using OpenAI Whisper (runs locally).
-  Summarizes transcriptions using Gemini API and generate a summary report.


## Tech Stack

- **Backend:** Python, FastAPI, Whisper, Gemini API
- **Frontend:** Next.js (React + TypeScript)
- **Containerization:** Docker



## To run it locally using Docker

### 1. Clone the repository

```bash
git clone https://github.com/ifrah-ashraf/hongkong
cd hongkong
```

### 2. Setup environment variable in backend/env

``` 
GEMINI_API= # give your api key here
```

### 3. Setup environment varibale in frontend/env
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

### 4. Run docker command
building the image would take 15-20 mins time as the model has multiple dependency and files.
```
docker compose up --build
```
start the container 
```
docker compose up 
```
Check the website at `http://localhost:3000` and test it.
