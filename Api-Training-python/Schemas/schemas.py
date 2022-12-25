from pydantic import BaseModel


# training
class TrainingBase(BaseModel):
    id: int | None=None
    description:str
    imgurl:str
    name:str
    price : float
    quantity : int
    category_id : int


class TrainingCreate(TrainingBase):
    pass


class Training(TrainingBase):
    id: int
    
    class Config:
        orm_mode = True
        




#  category
class CategoryBase(BaseModel):
    id: int | None=None
    name: str
    description: str | None = None


class CategoryCreate(CategoryBase):
    pass


class CategoryRead(CategoryBase):
    id: int
    trainings : list[Training]=[]
    
    class Config:
        orm_mode = True


class CategoryUpdate(CategoryBase):
    class Config:
        orm_mode = True
    
    
    
    
    
