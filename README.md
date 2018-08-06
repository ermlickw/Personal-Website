# Personal-Website
## http://ermlickw.pythonanywhere.com/about/
## starting up locally
python manage.py runserver <br />
python mange.py createsuperuser
## migrate db
more text <br />
go into virtualenv: <br />
cd into manage.py <br />
python manage.py make migrations <br />
python manage.py migrate "app" (blog in this case) <br />
python manage.py make migrations <br />
<br /><br />
## set up static files:
python manage.py collectstatic <br />
add "?v=00001" to the end of the source to clear cache locally for static files
## Fix db breakdown
python manage.py migrate --run-syncdb <br />
## set up VE
mkvirtualenv --python=python3.6 myproj <br />
pip list <br />
pip install -U django==2.0.5 <br />
which django-admin.py

