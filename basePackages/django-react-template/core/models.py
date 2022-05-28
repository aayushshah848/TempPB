import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from core.managers import MyBaseUserManager


class BaseUser(AbstractUser):
    _private_id = models.BigAutoField(primary_key=True, name="pkid")
    id = models.UUIDField(
        unique=True,
        default=uuid.uuid4,
        editable=False)

    username = None  # Don't use usernames
    email = models.EmailField(unique=True)
    picture_sm_url = models.CharField(max_length=255, default="", blank=True, null=False)
    picture_md_url = models.CharField(max_length=255, default="", blank=True, null=False)
    picture_lg_url = models.CharField(max_length=255, default="", blank=True, null=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = MyBaseUserManager()
