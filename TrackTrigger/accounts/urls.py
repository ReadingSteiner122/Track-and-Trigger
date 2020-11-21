from . import views
from django.urls import path, re_path, include
from django.conf.urls import url
from django.contrib.auth import views as auth_views

app_name = 'accounts'


urlpatterns = [
    re_path(r'^signup/', views.signup_view, name = "signup"),
    #re_path(r'^login/', views.login_view, name = "login"),
    re_path(r'^logout/', views.logout_view, name = "logout"),
    path('social-auth/', include('social_django.urls', namespace='social')),
    re_path(r'^profile/', views.profile_view, name = "profile"),
    #re_path(r'^password_reset/$', auth_views.PasswordResetView, name='password_reset'),
    #re_path(r'^password_reset/done/$', auth_views.PasswordResetDoneView, name='password_reset_done'),
    #re_path(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
    #    auth_views.PasswordResetConfirmView, name='password_reset_confirm'),
    #re_path(r'^reset/done/$', auth_views.PasswordResetCompleteView, name='password_reset_complete'),
]
