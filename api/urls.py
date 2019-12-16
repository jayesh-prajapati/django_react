from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'users/', include('users.urls')),
    url(r'rest-auth/', include('rest_auth.urls')),
    url(r'rest-auth/registration/', include('rest_auth.registration.urls')),
]
