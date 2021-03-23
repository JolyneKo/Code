"""
==============
     URLs
==============
"""

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from apps.homepage.views import homepage

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homepage)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
