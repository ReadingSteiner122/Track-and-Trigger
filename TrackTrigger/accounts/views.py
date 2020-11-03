from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages
from .forms import UserSignUpForm
from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from django.template import Context


# Create your views here.
def signup_view(request):
    form = UserSignUpForm(request.POST)
    if form.is_valid():
        user = form.save()
        username = form.cleaned_data.get('username')
        email = form.cleaned_data.get('email')
        htmly = get_template('accounts/Email.html')
        d = { 'username':username }
        subject, from_email, to = 'welcome', 'salilsanat@gmail.com', email
        html_content = htmly.render(d)
        msg = EmailMultiAlternatives(subject, html_content, from_email, [to])
        msg.attach_alternative(html_content, "text / html")
        msg.send()
        messages.success(request, f'Your Account has been created')
        login(request, user, backend='django.contrib.auth.backends.ModelBackend')
        #return redirect('dashboard:home')
        return redirect('home')
    else:
        form = UserSignUpForm()
    return render(request, 'accounts/signup.html', {'form':form})

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username = username, password = password)
    #if request.method == 'POST':
        #form = AuthenticationForm(request.POST)
        #if form.is_valid():
        #    login(request, user)
        #    return redirect('home')
    #else:
        #form = AuthenticationForm()
    #return render(request, 'accounts/login.html', {'form':form})
        if user is not None:
            form = login(request, user, backend='django.contrib.auth.backends.ModelBackend')
            messages.success(request, f'Welcome { username }!')
            return redirect('home')
        else:
            messages.info(request, f'Account does not exist')
    form = AuthenticationForm()
    return render(request, 'accounts/login.html', {'form':form})

def logout_view(request):
    if request.method == 'POST':
        logout(request)
    return redirect('home')

def profile_view(request):
    return redirect('home')
