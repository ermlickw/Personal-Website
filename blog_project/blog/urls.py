from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$',views.HomeView.as_view(),name='home'),
    url(r'^about/$',views.AboutView.as_view(),name='about'),
    url(r'^about/timeline/$',views.TimelineView.as_view(),name='timeline'),
    url(r'^about/fitbit/$',views.FitbitView.as_view(),name='fitbit'),
    url(r'^games/$',views.GameView.as_view(),name='games'),
    url(r'^games/connectfour',views.ConnectView.as_view(),name='connectfour'),
    url(r'^projects/$',views.ProjectsView.as_view(),name='projects'),

]
