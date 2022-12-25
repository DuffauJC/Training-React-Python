from fastapi import HTTPException,status,Response
from sqlalchemy.orm import Session
from Models.models import Category
from Schemas import schemas

async def read_categories(session : Session):
        return session.query(Category).all()
     
async def read_category_byid(session : Session,category_id:int):
         category = session.query(Category).filter(Category.id==category_id).first()
         if category is None:
            raise HTTPException(status_code=404, detail="Category not found")
         return category

async def create(data:schemas.CategoryCreate,session : Session):
         category = session.query(Category).filter(Category.name==data.name).first()
         if category :
            raise HTTPException(status_code=404, detail="Category already exist")
         data_category=Category(**data.dict())
         session.add(data_category) 
         session.commit()
         session.refresh(data_category)  
         return data_category  
      
async def update_category(data:schemas.CategoryUpdate,session : Session,category_id:int):
         response = session.query(Category).filter(Category.id==category_id)
         category=response.first()
         
         if not category :
            raise HTTPException(status_code=404, detail="Category not found")
         
         update_data=data.dict()
         response.filter(Category.id==category_id).update(update_data, synchronize_session=False)
         
         session.commit()
         session.refresh(category)
         return category
      
async def delete_category(session : Session,category_id:int):
         response = session.query(Category).filter(Category.id==category_id)
         category=response.first()
         
         if not category :
            raise HTTPException(status_code=404, detail="Category not found")
         
         response.delete(synchronize_session=False)
         session.commit()
         return Response(status_code=status.HTTP_204_NO_CONTENT,)