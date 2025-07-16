from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny

class RegisterView(generics.CreateAPIView):
    queryset = User.objects. all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

class TokenObtainPairView( TokenObtainPairView):
    permission_classes = (AllowAny,)
class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get (self, request):
        return Response({
            'message': f'Hello, {request.user.username}! You are authenticated.'
        })
