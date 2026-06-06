"""
URL configuration for django_learning project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import home
from core.views import add_product, update_product, delete_product
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', home),
    path('add-product/', add_product),
    path('update-product/<int:id>/', update_product),
    path('delete-product/<int:id>/', delete_product),
    path(
    'login/',
    auth_views.LoginView.as_view(template_name='login.html'),
    name='login'
),

path(
    'logout/',
    auth_views.LogoutView.as_view(),
    name='logout'
),
]