from fastapi import HTTPException, Response,status
from sqlalchemy.orm import Session
from Models.models import Training
from Schemas import schemas

async def read_trainings(session : Session):
      return session.query(Training).all()

async def read_training_byid(session : Session,training_id:int):
         training = session.query(Training).filter(Training.id==training_id).first()
         if training is None:
            raise HTTPException(status_code=404, detail="Training not found")
         return training
   
async def create(data:schemas.TrainingCreate,session : Session):
         training = session.query(Training).filter(Training.name==data.name).first()
         if training :
            raise HTTPException(status_code=404, detail="Training already exist")
         data_training=Training(**data.dict())
         session.add(data_training) 
         session.commit()
         session.refresh(data_training)  
         return data_training  
      
async def update_training(data:schemas.Training,session : Session,training_id:int):
         response = session.query(Training).filter(Training.id==training_id)
         training=response.first()
         
         if not training :
            raise HTTPException(status_code=404, detail="Training not found")
         
         update_data=data.dict()
         response.filter(Training.id==training_id).update(update_data, synchronize_session=False)
         
         session.commit()
         session.refresh(training)
         return training
      
async def delete_training(session : Session,training_id:int):
         response = session.query(Training).filter(Training.id==training_id)
         training=response.first()
         
         if not training :
            raise HTTPException(status_code=404, detail="Training not found")
         
         response.delete(synchronize_session=False)
         session.commit()
         return Response(status_code=status.HTTP_204_NO_CONTENT)