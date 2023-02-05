from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Connexion.database import engine
from Routes import trainingRoute, categoryRoute
from Models import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


# API depuis les routes
app.include_router(trainingRoute.router)
app.include_router(categoryRoute.router)





