from rest_framework import viewsets

from .models import Hospital
from .serializers import HospitalSerailizer


class HospitalViewSet(viewsets.ModelViewSet):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerailizer
