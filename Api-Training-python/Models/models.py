from sqlalchemy import Column, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship

from Connexion.database import Base

class Training(Base):
    __tablename__ = "training"

    id = Column(Integer, primary_key=True, index=True)
    description= Column(String(255))
    imgurl= Column(String(255))
    name= Column(String(255), index=True)
    price = Column(Float)
    quantity = Column(Integer)
    category_id = Column(Integer, ForeignKey("category.id"))
    
    category = relationship("Category", back_populates="trainings")


class Category(Base):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True, index=True)
    description = Column(String(255))
    name= Column(String(255), index=True)
   
    trainings = relationship("Training", back_populates="category")
