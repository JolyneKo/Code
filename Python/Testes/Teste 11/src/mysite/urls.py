from django.contrib import admin
from django.urls import path
from posts.views import post_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('posts/', post_views)
]
