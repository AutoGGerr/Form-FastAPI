from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Feedback(BaseModel):
    name: str
    email: str
    phone: str
    subject: str
    message: str

@app.post('/api/feedback')
async def create_feedback(request: Request):
    data = await request.json()

    print(data)

    return {
        "status": "success",
        "message": "Данные получены"
    }
    