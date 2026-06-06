from django.shortcuts import render
from core.models import Product
from django.contrib.auth.decorators import login_required

@login_required
def home(request):
    products = Product.objects.all()

    return render(request, 'home.html', {
        'products': products
    })