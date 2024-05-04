from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_methods=["*"], allow_headers=["*"])


@app.post("/upload-file")
async def upload_file(file: UploadFile):
    with open('./app_data/' + file.filename, "wb") as f:
        while chunk := await file.read(10000):
            f.write(chunk)
    
    return {"filename": file.filename}