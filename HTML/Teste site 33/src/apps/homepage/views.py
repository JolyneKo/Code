from django.shortcuts import render

"""
===============
     Views
===============
"""


def homepage(request):
    return render(request, "index.html")
