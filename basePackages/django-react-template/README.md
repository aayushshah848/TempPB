# django-react-template
Simple Django back-end + React front-end web application template.

The repository is updated every few weeks, but this README is not actively maintained. Some information might not be
accurate anymore.

This project template is set up to have **React** as the sole frontend framework, which communicates
with the backend's REST framework. The backend is set up to run **Django**.

## Usage

The following commands must be run from the system terminal/console. Naturally, the Python executable and npm/yarn must
be in your PATH. This document uses ``yarn``, but ``npm`` will do the trick just fine if you prefer that.

In PyCharm, run these commands from the Terminal tab.

### Create Python Virtual Environment
**Note:** PyCharm can handle this automatically through *Settings > Project:<project-name> > Python Interpreter > [cog icon] > Add...*
````
python -m venv venv 
````

### Install Python Dependencies
````
pip install -r requirements.txt
````

This will install all required Python dependencies to get you started. These dependencies are listed in `requirements.txt`.

----------------------

At this point the back-end framework is installed and ready to be configured.

### Install Front-End Dependencies

````
cd frontend
yarn install
cd ..
````

When you run ``yarn install``, all the required dependencies will be installed automatically for this project. These
dependencies are listed in ``frontend/package.json``.
To add more dependencies later for the front-end side of things, use ``npm`` or ``yarn`` from the ``frontend/`` directory (i.e. `yarn add <dependency>`).

### Creating Django Applications

In Django, each *project* can have multiple *applications* in them. Read more on those [here](https://docs.djangoproject.com/en/3.0/intro/reusable-apps/#:~:text=A%20Django%20application%20is%20a,%2C%20urls%20%2C%20and%20views%20submodules.).
In this repository, the *project* has already been started for you (with `python manage.py startproject django_react`) so there is no need to use this command here.

To create an application:
````
django-admin startapp <application-name>
````

Tell Django how to use your new application with in ``django_react/settings.py``:
````python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'newapp.apps.NewAppConfigs', # activate the new app
]
````

### Project Structure
````
/<django-project-name>/     <-- Created with startproject
/<django-app-1-name>/       <-- Created with startapp
/<django-app-1-name>/<...>
/<django-app-n-name>/       <-- Created with startapp
/<django-app-n-name>/<...>
/venv/                      <-- Python virtual environment
````

