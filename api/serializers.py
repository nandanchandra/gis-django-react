from rest_framework_gis.serializers import GeoFeatureModelSerializer

from .models import Hospital


class HospitalSerailizer(GeoFeatureModelSerializer):
    class Meta:
        model = Hospital
        geo_field = 'location'
        fields = ['name', 'province', 'district','department', 'hospital_code']
        read_only_fields = ['id', 'created_at', 'updated_at']
