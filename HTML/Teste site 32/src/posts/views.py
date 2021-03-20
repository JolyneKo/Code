from django.shortcuts import render
from django.http import JsonResponse
from .models import Post


def post_infos(response):
    num_of_posts = {
        "num_of_posts": Post.objects.count(),
        "posts": {
        }
    }

    for id, post in enumerate(Post.objects.all()):
        key = f"post_{id}"

        num_of_posts["posts"][key] = {
            "title": post.title,
            "description": post.description,
            "date": post.date
        }

    return JsonResponse(num_of_posts, safe=False)
