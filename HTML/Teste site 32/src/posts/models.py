from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=200)
    image = models.CharField(max_length=500, null=True)
    description = models.TextField()
    date = models.CharField(max_length=10)
