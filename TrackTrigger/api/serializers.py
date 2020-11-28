from rest_framework import serializers
from django.contrib.auth.models import User
from NewsApp.models import *
from django.contrib.auth import authenticate
from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from django.template import Context
from validate_email import validate_email
from rest_framework.response import Response


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

class ImageObjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageObject
        fields = '__all__'

class ToDoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDoItem
        fields = '__all__'
class PhoneNumberStringSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneNumberString
        fields = '__all__'



class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):

    user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
    username = validated_data['username']
    email = validated_data['email']
    htmly = get_template('api/Email.html')
    d = { 'username':username }
    subject, from_email, to = 'welcome', 'salilsanat@gmail.com', email
    html_content = htmly.render(d)
    msg = EmailMultiAlternatives(subject, html_content, from_email, [to])
    msg.attach_alternative(html_content, "text / html")
    msg.send()
    return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")

class ProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProfileOTP
    fields = '__all__'

  def create(self, validated_data):
    email = validated_data['email']
    #is_valid = validate_email(email_address=email, check_regex=True, check_mx=True, from_address='kar.nadimpalli11@gmail.com', helo_host='my.host.name', smtp_timeout=10, dns_timeout=10, use_blacklist=True, debug=False)
    #if is_valid :
    profile = ProfileOTP.objects.create(**validated_data)
    email = validated_data['email']
    otp = profile.otp
    htmly = get_template('api/Email1.html')
    d = { 'otp':otp }
    subject, from_email, to = 'OTP for App', 'salilsanat@gmail.com', email
    html_content = htmly.render(d)

    msg = EmailMultiAlternatives(subject, html_content, from_email, [to])
    msg.attach_alternative(html_content, "text / html")
    msg.send()
    return profile




