from django.shortcuts import render
from posts.models import Post
import random


def home(request):
    items = list(Post.objects.all())

    context = {
        'posts': Post.objects.all(),
        'random_posts': random.sample(items, 3)
    }

    return render(request, "index.html", context)
