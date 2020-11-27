from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from NewsApp.models import *
from rest_framework import viewsets
from .serializers import *
from django.contrib.auth.models import User
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken

# Create your views here.

#def apiOverview(request):


#    return Response("API BASE POINT", safe=False)
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer

class DiaryViewSet(viewsets.ModelViewSet):
    queryset = Diary.objects.all().order_by('title')
    serializer_class = DiarySerializer

#class IndividualDiaryViewSet(viewsets.ModelViewSet):
#    queryset = Diary.objects.filter('title')
#    serializer_class = DiarySerializer

class InventoryObjectViewSet(viewsets.ModelViewSet):
    queryset = InventoryObject.objects.all().order_by('name')
    serializer_class = InventoryObjectSerializer

class ImageObjectViewSet(viewsets.ModelViewSet):
    queryset = ImageObject.objects.all().order_by('name')
    serializer_class = ImageObjectSerializer

class ToDoItemViewSet(viewsets.ModelViewSet):
    queryset = ToDoItem.objects.all().order_by('name')
    serializer_class = ToDoItemSerializer

# Register API
class RegisterAPI(generics.GenericAPIView):
  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

# Login API
class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    _, token = AuthToken.objects.create(user)
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": token
    })

class UserAPI(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = UserSerializer
  def get_object(self):
    return self.request.user
