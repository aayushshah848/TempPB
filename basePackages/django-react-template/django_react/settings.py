import os

from pathlib import Path
from os import path
from dotenv import load_dotenv

load_dotenv()

PROJECT_ROOT = os.path.join(os.path.dirname(__file__), '..').replace('\\', '/')
STATIC_ROOT = path.join(PROJECT_ROOT, 'static').replace('\\', '/')

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = os.getenv('SECRET_KEY')
DEBUG = True if os.getenv('DEBUG') == 'true' else False
LOCALHOST_DEV = True if os.getenv('LOCALHOST_DEV') == 'true' else False
DEVELOPMENT = True if os.getenv('DEVELOPMENT') == 'true' else False
ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS', '').split(',')


if DEVELOPMENT:
    DEFAULT_FILE_STORAGE = "django.core.files.storage.FileSystemStorage"
    STATICFILES_STORAGE = "django.contrib.staticfiles.storage.StaticFilesStorage"
    STATIC_URL = 'http://localhost:8080/static/'
    STATIC_URL_PATH = 'http://localhost:8080/static/'
    # STATIC_URL = f'https://gro-api-static.nyc3.digitaloceanspaces.com/static-dev/'
    SITE_URL = 'http://your-dev-url.com'
    SITE_WS_URL = 'ws://your-dev-url.com/ws'
else:
    STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
    SITE_URL = 'https://www.your-prod-url.com'
    SITE_WS_URL = 'wss://www.your-prod-url.com/ws'
    STATIC_URL = f"{SITE_URL}/static/"


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'core',
    'frontend',

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ]
}

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'guardian.backends.ObjectPermissionBackend',
)

ROOT_URLCONF = 'django_react.urls'
ANONYMOUS_USER_NAME = 'Guest'
AUTH_USER_MODEL = 'core.BaseUser'
ASGI_APPLICATION = 'django_react.asgi.application'
WSGI_APPLICATION = 'django_react.wsgi.application'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True
