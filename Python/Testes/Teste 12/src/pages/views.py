from django.shortcuts import render
from django.http import HttpResponseRedirect
from .forms import Registro_form

def home_view(request):
	if request.method == "POST":
		form = Registro_form(request.POST)

		if form.is_valid():
			form.save()
			return HttpResponseRedirect("/thanks/")

	return render(request, "pages/index.html")