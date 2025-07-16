from django.contrib.auth.models import User
from rest_framework import serializers

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only= True)

    class Meta:
        model= User
        fields= ('name', 'email', 'password')
    
    def create(self, validated_data):
       user = User.objects.create_user(
           name = validated_data['username'],
           email = validated_data.get('email'),
           password= validated_data ['password']      
        )
       return User
