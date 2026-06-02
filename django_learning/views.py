from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome friends! Ye mera first Django page hai.")