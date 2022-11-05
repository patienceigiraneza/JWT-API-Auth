from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from . models import *
from django.http import JsonResponse
from .serializers import *

# Create your views here.


class index(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        def_drink = Product.objects.all()
        def_serializer = ProductSerializer(def_drink, many=True)
        return JsonResponse(def_serializer.data, safe=False)
