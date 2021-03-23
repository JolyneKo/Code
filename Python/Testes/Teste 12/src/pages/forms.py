from django import forms
from .models import Site_users

class Registro_form(forms.ModelForm):
	class Meta:
		model = Site_users

		fields = ("email", "senha")
