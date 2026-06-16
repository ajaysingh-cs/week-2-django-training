from django.shortcuts import render, redirect, get_object_or_404
from .models import Product
from .forms import ProductForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import logout
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import ProductSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets

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
    
    
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('/login/')
    else:
        form = UserCreationForm()

    return render(request, 'register.html', {'form': form})

def custom_logout(request):
    logout(request)
    return redirect('/login/')

from django.http import JsonResponse

def api_test(request):
    return JsonResponse({
        "message": "Hello from Django API"
    })


def product_list(request):
    products = list(
        Product.objects.values(
            "id",
            "name",
            "price"
        )
    )

    return JsonResponse(products, safe=False)

    
@csrf_exempt
def api_add_product(request):
    if request.method == "POST":
        data = json.loads(request.body)

        product = Product.objects.create(
            name=data["name"],
            price=data["price"]
        )

        return JsonResponse({
            "id": product.id,
            "name": product.name,
            "price": product.price
        })


@csrf_exempt
def api_delete_product(request, id):
    product = Product.objects.get(id=id)
    product.delete()

    return JsonResponse({
        "message": "Product deleted successfully"
    })
    

class ProductAPIView(APIView):

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )
        

class RegisterAPIView(APIView):

    def post(self, request):

        username = request.data.get("username")
        password = request.data.get("password")

        if User.objects.filter(username=username).exists():

            return Response(
                {"error": "Username already exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        User.objects.create_user(
            username=username,
            password=password
        )

        return Response(
            {"message": "User created successfully"},
            status=status.HTTP_201_CREATED
        )
        
class DashboardAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        return Response({
            "message": f"Welcome {request.user.username}",
            "authenticated": True
        }) 

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer