from typing import List
from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session
from Connexion.database import get_db
from Controller import trainingController
from Schemas import schemas

router = APIRouter()


@router.get("/api/trainings",response_model=List[schemas.Training])
async def get_all_trainings(session:Session=Depends(get_db)):
    return await trainingController.read_trainings(session)

@router.get("/api/trainingById/{training_id}",response_model=schemas.Training)
async def get_one_training(*,session:Session=Depends(get_db),training_id:int): 
    return await trainingController.read_training_byid(session,training_id=training_id)

@router.post("/api/trainingCreate",response_model=schemas.Training)
async def create_training(data:schemas.TrainingCreate,session:Session=Depends(get_db)):
    return await trainingController.create(data=data,session=session)

@router.put("/api/trainingUpdate/{training_id}",response_model=schemas.Training)
async def update_training(*,data:schemas.Training,session:Session=Depends(get_db),training_id:int): 
    return await trainingController.update_training(data=data,session=session,training_id=training_id)

@router.delete("/api/trainingDelete/{training_id}")
async def delete_training(*,session:Session=Depends(get_db),training_id:int): 
    return await trainingController.delete_training(session=session,training_id=training_id)