if [ $1 = "react" ] && [ $2 = "django" ]
then
django-admin startproject $3 --template basePackages/django-react-template
mv $3 basePackages/$3
# cp -r ./basePackages/django-react-template ./basePackages/$3
fi

if [ $1 = "angular" ] && [ $2 = "django" ]
then
django-admin startproject $3 --template basePackages/django-ng-boilerplate
mv $3 basePackages/$3
fi
