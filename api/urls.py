from rest_framework.routers import DefaultRouter

from .views import HospitalViewSet

router = DefaultRouter()

router.register(prefix='api/hospital',viewset=HospitalViewSet, basename='hospital')

urlpatterns = router.urls
