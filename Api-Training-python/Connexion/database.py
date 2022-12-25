from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session

from settings import Settings


settings = Settings(_env_file='prod.env', _env_file_encoding='utf-8')

DATABASE_URL = settings.DATABASE_URL


engine = create_engine(
    DATABASE_URL
)

Base = declarative_base()


# Dependency
def get_db():
     with Session(engine) as session:
        yield session
    