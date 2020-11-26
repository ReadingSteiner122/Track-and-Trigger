"""TrackTrigger URL Configuration

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
from . import views
from NewsApp.views import *
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^accounts/', include('accounts.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    re_path(r'^$', views.home, name='home'),
    path('NewsApp/diary/', diaryPage, name='diary'),
    re_path(r'^NewsApp/diary/(?P<slug>[\w-]+)/$',diaryEntry, name = 'diaryentry'),
    path('NewsApp/images/',imagePage, name = 'image'),
    path('NewsApp/imagemodelform/', ImageModelForm, name = 'imagemodelform'),
    path('NewsApp/addimagemodelform/', addImageModelForm, name = 'addimagemodelform'),
    path('NewsApp/todolist/',ToDoPage, name = 'todolist'),
    path('NewsApp/todomodelform/', ToDoModelForm, name = 'todomodelform'),
    path('NewsApp/addtodomodelform/', addToDoModelForm, name = 'addtodomodelform'),
    path('NewsApp/diarymodelform/', DiaryModelForm, name = 'diarymodelform'),
    path('NewsApp/adddiarymodelform/', addDiaryModelForm, name = 'adddiarymodelform'),
    path('NewsApp/inventory/', InventoryPage,name = 'inventory'),
    path('NewsApp/inventorymodelform/', InventoryModelForm, name = 'inventorymodelform'),
    path('NewsApp/addinventorymodelform/', addInventoryModelForm, name = 'addinventorymodelform'),
    path('NewsApp/quantityform/', NewQuantityForm, name = 'newquantity'),
    path('NewsApp/editquantityform/', EditQuantityForm, name = 'editquantity'),
    path('api/', include('api.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
