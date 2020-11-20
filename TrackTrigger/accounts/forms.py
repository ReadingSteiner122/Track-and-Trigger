from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate

from .models import Profile

class UserSignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=60)
    phone_no = forms.CharField(max_length=10)
    first_name = forms.CharField(max_length=20)
    last_name = forms.CharField(max_length=20)
    class Meta:
        model = Profile
        fields = ['username', 'email', 'first_name', 'last_name', 'phone_no', 'password1', 'password2']
    def save(self, commit=True):
        user = super(UserSignUpForm, self).save(commit=False)
        user.username = self.cleaned_data['username']
        user.phone_no = self.cleaned_data['phone_no']
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user

class ProfileAuthenticationForm(forms.ModelForm):
    password = forms.CharField(label='Password', widget=forms.PasswordInput)
    class Meta:
        model = Profile
        fields = ['username', 'password']

    def clean(self):
        if self.is_valid():
            username = self.cleaned_data['username']
            password = self.cleaned_data['password']
            if not authenticate(username=username, password=password):
                raise forms.ValidationError("Invalid Login")

class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = {'email', 'username', 'phone_no'}

    def clean_email(self):
        if self.is_valid():
            email = self.cleaned_data['email']
            try:
                profile = Profile.objects.exclude(pk=self.instance.pk).get(email=email)
            except Profile.DoesNotExist:
                return email
            raise forms.ValidationError('Email "%s" is already in use.' % email)

    def clean_username(self):
        if self.is_valid():
            username = self.cleaned_data['username']
            try:
                profile = Profile.objects.exclude(pk=self.instance.pk).get(username=username)
            except Profile.DoesNotExist:
                return username
            raise forms.ValidationError('Username "%s" is already in use.' % username)

    def clean_phone_no(self):
        if self.is_valid():
            phone_no = self.cleaned_data['phone_no']
            try:
                profile = Profile.objects.exclude(pk=self.instance.pk).get(phone_no=phone_no)
            except Profile.DoesNotExist:
                return phone_no
            raise forms.ValidationError('Phone Number "%s" is already in use.' % phone_no)
