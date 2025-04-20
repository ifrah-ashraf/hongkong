from fastapi import APIRouter
from backend.utils.models import UserSchema
from backend.utils.token_handler import sign_jwt


router = APIRouter()

@router.post("/api/login",tags=["auth"])
async def login_handler(user:UserSchema):
    token = sign_jwt(user.userid)
    return{"token": token}