from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    rating = models.IntegerField()

# this method will show the movie title when Django displays the object
    def __str__(self):
        return self.title