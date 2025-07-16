from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class RegisterView(generics.CreateAPIView):
    queryset = User.objects. all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

class TokenObtainPairView( TokenObtainPairView):
    permission_classes = (AllowAny,)

