from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
from aiogram import Bot
load_dotenv()

bot_token = os.getenv("BOT_TOKEN")
bot_chat_id = os.getenv("BOT_CHAT_ID")


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],
)

@app.post('/api/feedback') 
async def create_feedback(request: Request):
    data = await request.json()

    name = data.get('name', '')
    email = data.get('email', '')
    phone = data.get('phone', '')
    subject = data.get('subject', '')
    message = data.get('message', '')

    text = (
        "📩 Новая заявка!\n\n"
        f"Имя: {name}\n"
        f"Email: {email}\n"
        f"Телефон: {phone}\n"
        f"Тема: {subject}\n"
        f"Сообщение: {message}"
    )

    async with Bot(token=bot_token) as bot:
        await bot.send_message(
            chat_id=bot_chat_id,
            text=text
        )

    return {
        "status": "success",
        "message": "Данные получены"
    }
    