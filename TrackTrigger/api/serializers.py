from rest_framework import serializers
from django.contrib.auth.models import User
from NewsApp.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class DiarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Diary
        fields = '__all__'

class InventoryObjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryObject
        fields = '__all__'

class ImageObjectSerializer(serializers.Serializer):
    name = serializers.CharField()
    image = serializers.ImageField()
    user = serializers.CharField()

class ToDoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDoItem
        fields = '__all__'
