echo $1
echo $2
echo $3
if [ $1 = "react" ] && [ $2 = "django" ]
then
cp -r ./basePackages/django-react-template ./basePackages/$3
fi
