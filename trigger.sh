if [ $1 = "react" ] && [ $2 = "django" ]
then
django-admin startproject $3 --template basePackages/django-react-template
# cp -r ./basePackages/django-react-template ./basePackages/$3
else 
if [ $1 = "angular" ] && [ $2 = "django" ]
then
django-admin startproject $3 --template basePackages/django-ng-boilerplate
else
if [ $1 = "vue" ] && [ $2 = "django" ]
then
django-admin startproject $3 --template basePackages/django-vue3-template
else 
if [ $1 = "none" ] && [ $2 = "django" ]
then 
django-admin startproject $3 
cd $3
python3 manage.py myapp
cd ..
else
if [ $1 = "react" ] && [ $2 = "express" ]
then
cp -r basePackages/react-express-template $3
cd $3
mv package.json package_old.json
jq  --arg a "$3" '.name = $a' package_old.json > package.json
rm package_old.json
cd ..
pwd
fi
fi
fi
fi
fi
echo $3
[ -d basePackages/$3 ] && rm -r basePackages/$3
mv $3 basePackages/
