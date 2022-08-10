from django.contrib.gis.db import models

PROVINCE_CHOICES = [
    ('Assam Province', 'Assam Province'),
    ('Bihar Province', 'Bihar Province'),
    ('Bombay Province', 'Bombay Province'),
    ('Punjab Province', 'Punjab Province'),
    ('Orissa Province', 'Orissa Province'),
    ('United Province', 'United Province'),
    ('Rajputana Province', 'Rajputana Province')
]

DEPARTMENT_CHOICES = [
    ('Consultation', 'Consultation'),
    ('Investigation', 'Investigation'),
    ('Procedures', 'Procedures'),
    ('Clinics', 'Clinics'),
    ('Rehabilitation ', 'Rehabilitation '),
    ('Counseling', 'Counseling')
]


class Hospital(models.Model):
    name = models.CharField(max_length=100, unique=True)
    province = models.CharField(max_length=30, choices=PROVINCE_CHOICES)
    district = models.CharField(max_length=50)
    department = models.CharField(max_length=30, choices=DEPARTMENT_CHOICES)
    hospital_code = models.IntegerField(default=0)
    location = models.PointField(srid=4326)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=False)

    def __str__(self):
        return self.name
