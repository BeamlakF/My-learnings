from django.urls import path
from .views import RegisterView, TokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from .views import ProtectedView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view, name='token_refresh'),
    path('protected/', ProtectedView.as_view(), name='protected'),
]
 