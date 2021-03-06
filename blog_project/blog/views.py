from django.shortcuts import render, get_object_or_404, redirect
# from django.contrib.auth.decorators import login_required
# from blog.models import Post, Comment
from django.utils import timezone
# from blog.forms import PostForm, CommentForm

from django.views.generic import (TemplateView,ListView,
                                  DetailView,CreateView,
                                  UpdateView,DeleteView)

# from django.urls import reverse_lazy
# from django.contrib.auth.mixins import LoginRequiredMixin #class based requirement

class AboutView(TemplateView):
    template_name = 'about.html'

class TimelineView(TemplateView):
    template_name = 'timeline.html'

class FitbitView(TemplateView):
    template_name = 'fitbit.html'

class HomeView(TemplateView):
    template_name = 'base.html'

class GameView(TemplateView):
    template_name = 'games.html'

class ConnectView(TemplateView):
    template_name = 'connectfour.html'

class ProjectsView(TemplateView):
    template_name = 'projects.html'
