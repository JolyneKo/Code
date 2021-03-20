from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    date = models.CharField(max_length=10)
