from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
#router.register(r'heroes', views.HeroViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'diary', views.DiaryViewSet)
router.register(r'inventory_object', views.InventoryObjectViewSet)
router.register(r'todoitem', views.ToDoItemViewSet)
router.register(r'image_object', views.ImageObjectViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
