from django.contrib import admin
from django.urls import path
from posts.views import post_infos
from home.views import home
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts', post_infos),
    path('', home)
] + static(settings.MEDIA_URL,
           document_root=settings.MEDIA_ROOT)
