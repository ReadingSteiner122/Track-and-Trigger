from . import views
from django.urls import path, re_path, include
from django.conf.urls import url

app_name = 'accounts'


urlpatterns = [
    re_path(r'^signup/', views.signup_view, name = "signup"),
    re_path(r'^login/', views.login_view, name = "login"),
    re_path(r'^logout/', views.logout_view, name = "logout"),
    path('social-auth/', include('social_django.urls', namespace='social')),
    re_path(r'^profile/', views.profile_view, name = "profile"),
]
