from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from django.contrib.auth.models import User
from random import randint
# Create your models here.


class Diary(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    slug = models.SlugField()
    d_date = models.DateField(default = timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default = None)
    def __str__(self):
        return self.title
    def snippet(self):
        return self.description[:50] + '...'
    def _get_unique_slug(self):
        slug = slugify(self.title)
        unique_slug = slug
        num = 1
        while Diary.objects.filter(slug=unique_slug).exists():
            unique_slug = '{}-{}'.format(slug, num)
            num += 1
        return unique_slug
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self._get_unique_slug()
        super().save(*args, **kwargs)


class InventoryObject(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    quantity = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, default = None)
    def __str__(self):
        return self.name

class ImageObject(models.Model):
    name = models.CharField(max_length=30)
    image = models.ImageField(blank = True, upload_to = "media/")
    user = models.ForeignKey(User, on_delete=models.CASCADE, default = None)
    def __str__(self):
        return self.name

class ToDoItem(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    date = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, default = None)
    def __str__(self):
        return self.name

class PhoneNumberString(models.Model):
    number = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default = None)
    def __str__(self):
        return self.number

class ProfileOTP(models.Model):
    username = models.CharField(max_length=30)
    password = models.TextField()
    email = models.TextField()
    a = randint(100000, 999999)
    str(a)
    otp = models.CharField(max_length=6, default = a)
    def __str__(self):
        return self.username
