from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import get_user_model
from django import forms

class RegisterForm(UserCreationForm):
    username = forms.CharField(max_length=30)
    email = forms.EmailField(max_length=200)
    class Meta:
        model = get_user_model()
        fields = ('email', 'username', 'password1', 'password2')

class LoginForm(AuthenticationForm):
    username = forms.CharField(label='Email/Username')
