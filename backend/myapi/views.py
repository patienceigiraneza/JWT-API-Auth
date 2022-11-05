from django.shortcuts import render
from django.http import HttpResponse
from . models import *
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .serializers import *

# Create your views here.




@api_view(['GET', 'POST'])
def index(request):
    if request.method == 'GET':
        def_product = Product.objects.all()
        def_serializer = ProductSerializer(def_product, many=True)
        return JsonResponse(def_serializer.data, safe=False)


def login(request):
    return HttpResponse("Not yet done")
