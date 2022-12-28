from typing import List
from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from Controller import categoryController
from Connexion.database import get_db
from Schemas import schemas

router = APIRouter()

@router.get("/api/categories",response_model=List[schemas.CategoryRead])
async def get_categories(session:Session=Depends(get_db)):
    return await categoryController.read_categories(session)

@router.get("/api/categoryById/{category_id}",response_model=schemas.CategoryRead)
async def get_one_training(*,session:Session=Depends(get_db),category_id:int): 
    return await categoryController.read_category_byid(session,category_id=category_id)

@router.post("/api/categoryCreate",response_model=schemas.CategoryRead)
async def create_category(data:schemas.CategoryCreate,session:Session=Depends(get_db)):
    return await categoryController.create(data=data,session=session)

@router.put("/api/categoryUpdate/{category_id}",response_model=schemas.CategoryUpdate)
async def update_category(*,data:schemas.CategoryUpdate,session:Session=Depends(get_db),category_id:int): 
    return await categoryController.update_category(data=data,session=session,category_id=category_id)

@router.delete("/api/categoryDelete/{category_id}")
async def delete_category(*,session:Session=Depends(get_db),category_id:int): 
    return await categoryController.delete_category(session=session,category_id=category_id)