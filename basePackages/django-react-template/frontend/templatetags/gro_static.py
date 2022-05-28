from django import template
from django.conf import settings

register = template.Library()

STATIC_URL_PATH = getattr(settings, 'STATIC_URL_PATH')


@register.simple_tag
def gro_static(path):
    return f"{STATIC_URL_PATH}{path}"
