from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.index),
    path('login/', views.login),
]
