"""TrackTrigger3 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from django.contrib.auth import views as auth_views
from .views import (
    home_view,
)
from accounts.views import (
    registration_view,
    logout_view,
    login_view,
    profile_view
)

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^$', home_view, name='home'),
    re_path(r'^accounts/signup', registration_view, name='signup'),
    path('accounts/logout', logout_view, name='logout'),
    path('accounts/login', login_view, name='login'),
    path('accounts/profile', profile_view, name='profile'),
    re_path(r'^accounts/oauth/', include('social_django.urls', namespace='social')),
    path('accounts/password_change/done/', auth_views.PasswordChangeDoneView.as_view(template_name='registration/password_change_done.html'), name = 'password_change_done'),
    path('accounts/password_change/', auth_views.PasswordChangeView.as_view(template_name='registration/password_change.html'), name = 'password_change'),
    path('accounts/password_reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='registration/password_reset_done.html'), name = 'password_reset_done'),
    path('accounts/reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('accounts/password_reset/', auth_views.PasswordResetView.as_view(), name = 'password_reset'),
    path('accounts/reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='registration/password_reset_complete.html'), name='password_reset_complete'),
]
