from unicodedata import category
from django.shortcuts import render
from api.models import Product, Category
from django.http import JsonResponse
from django.http import Http404

def product_list(request):
    products = Product.objects.all()
    product_json = [p.to_json() for p in products]
    return JsonResponse(product_json, safe=False)

def product_detail(request, pk):
    try:
        p = Product.objects.get(pk=pk)
    except:
        raise Http404("Product does not exist")
    return JsonResponse(p.to_json(), safe=False)

def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, pk):
    try:
        c = Category.objects.get(pk=pk)
    except:
        raise Http404("Category doesn't exist")
    return JsonResponse(c.to_json(), safe=False)

def category_product_list(request, pk):
    c = Category.objects.get(pk=pk)
    products = Product.objects.filter(category=c)
    product_json = [p.to_json() for p in products]
    return JsonResponse(product_json, safe=False)
