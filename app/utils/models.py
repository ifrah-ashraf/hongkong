from pydantic import BaseModel

class UserSchema(BaseModel):
    userid: str
    password: str
    