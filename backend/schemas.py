from pydantic import BaseModel


class GenreBase(BaseModel):
    title: str


class GenreCreate(GenreBase):
    pass


class Genre(GenreBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    pass


class UserCreate(UserBase):
    pass


class User(UserBase):
    id: int
    user_id: str
    genres: list[Genre] = []

    class Config:
        orm_mode = True
