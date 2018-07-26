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

class HomeView(TemplateView):
    template_name = 'base.html'
