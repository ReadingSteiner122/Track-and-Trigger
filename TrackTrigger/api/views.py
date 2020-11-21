from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from NewsApp.models import *
from rest_framework import viewsets
from .serializers import *
from django.contrib.auth.models import User

# Create your views here.

#def apiOverview(request):


#    return Response("API BASE POINT", safe=False)
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer

class DiaryViewSet(viewsets.ModelViewSet):
    queryset = Diary.objects.all().order_by('title')
    serializer_class = DiarySerializer

class InventoryObjectViewSet(viewsets.ModelViewSet):
    queryset = InventoryObject.objects.all().order_by('name')
    serializer_class = InventoryObjectSerializer

class ImageObjectViewSet(viewsets.ModelViewSet):
    queryset = ImageObject.objects.all().order_by('name')
    serializer_class = ImageObjectSerializer

class ToDoItemViewSet(viewsets.ModelViewSet):
    queryset = ToDoItem.objects.all().order_by('name')
    serializer_class = ToDoItemSerializer
