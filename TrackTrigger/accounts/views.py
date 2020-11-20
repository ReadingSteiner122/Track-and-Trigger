from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from accounts.forms import UserSignUpForm, ProfileAuthenticationForm, ProfileUpdateForm

def registration_view(request):
    context = {}
    if request.POST:
        form = UserSignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            profile = authenticate(username=username, password=raw_password)
            login(request, profile)
            return redirect('home')
        else:
            context['UserSignUp_form'] = form
    else:
        form = UserSignUpForm()
        context['UserSignUp_form'] = form
    return render(request, 'accounts/signup.html', context)


def logout_view(request):
    logout(request)
    return redirect('home')

def login_view(request):
    context = {}
    user = request.user
    if user.is_authenticated:
        return redirect('home')

    if request.POST:
        form = ProfileAuthenticationForm(request.POST)
        if form.is_valid():
            username = request.POST['username']
            password = request.POST['password']
            profile = authenticate(username=username, password=password)
            if profile.is_authenticated:
                login(request, profile)
                return redirect("home")
    else:
        form = ProfileAuthenticationForm()
    context['login_form'] = form
    return render(request, 'accounts/login.html', context)

def profile_view(request):
    if not request.user.is_authenticated:
        return redirect('login')
    context = {}

    if request.POST:
        form = ProfileUpdateForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
    else:
        form = ProfileUpdateForm(
            initial={
            "email": request.user.email,
            "username": request.user.username,
            "phone_no": request.user.phone_no,
            }
        )
    context['profile_form'] = form
    return render(request, 'accounts/profile.html', context)
