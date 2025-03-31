from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    api_key = os.getenv("GEMINI_API_KEY")
    return templates.TemplateResponse(
        "index.html",
        {"request": request, "api_key": api_key}
    )
