from django.shortcuts import render
from api.models import Product, Category
from django.http import JsonResponse
from django.http import Http404

def product_list(request):
    products = Product.objects.all()
    product_json = [p.to_json() for p in products]
    return JsonResponse(product_json, safe=False)

def product_detail(request, product_id):
    try:
        p = Product.objects.get(id=product_id)
    except:
        raise Http404("Product does not exist")
    return JsonResponse(p.to_json(), safe=False)

def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, category_id):
    try:
        c = Category.objects.get(id=category_id)
    except:
        raise Http404("Category doesn't exist")
    return JsonResponse(c.to_json(), safe=False)
