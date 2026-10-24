from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Сервер работает"}

@app.post("/api/feedback")
async def feedback(data: dict):
    print(data)
    return {"status": "success"}