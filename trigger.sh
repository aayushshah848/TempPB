if [ $1 = "react" ] && [ $2 = "django" ]
then
django-admin startproject ./basePackages/$3 --template basePackages/django-react-template 
# cp -r ./basePackages/django-react-template ./basePackages/$3
fi
