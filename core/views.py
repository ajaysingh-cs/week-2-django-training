from django.shortcuts import render, redirect, get_object_or_404
from .models import Product
from .forms import ProductForm


def add_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('/home/')
    else:
        form = ProductForm()

    return render(request, 'add_product.html', {'form': form})


def update_product(request, id):
    product = get_object_or_404(Product, id=id)

    if request.method == 'POST':
        form = ProductForm(request.POST, instance=product)

        if form.is_valid():
            form.save()
            return redirect('/home/')
    else:
        form = ProductForm(instance=product)

    return render(request, 'add_product.html', {'form': form})

def delete_product(request, id):
    product = get_object_or_404(Product, id=id)
    product.delete()
    return redirect('/home/')