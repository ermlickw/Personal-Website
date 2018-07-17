# Personal-Website
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
python manage.py collectstatic
## Fix db breakdown
python manage.py migrate --run-syncdb <br />
