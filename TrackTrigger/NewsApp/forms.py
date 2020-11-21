from django import forms
from django.utils import timezone
from .models import *


class DiaryEntryForm(forms.ModelForm):
    class Meta:
        model = Diary

        fields =['title','description']
        widgets = {
            'title':forms.TextInput(attrs={'class':'form-control','placeholder':'title'}),
            'description':forms.TextInput(attrs={'class':'form-control','placeholder':'description'})
        }

class NewInventoryForm(forms.ModelForm):
    class Meta:
        model = InventoryObject

        fields =['name','description', 'quantity']
        widgets = {
            'name':forms.TextInput(attrs={'class':'form-control','placeholder':'name'}),
            'description':forms.TextInput(attrs={'class':'form-control','placeholder':'description'}),
            'quantity':forms.NumberInput(attrs={'class':'form-control','placeholder':'quantity'})
        }

class ChangeQuantityForm(forms.ModelForm):
    class Meta:
        model = InventoryObject
        choice_list = list(InventoryObject.objects.all().values_list('name', flat = True))
        choice_tuple_list = [(item,item) for item in choice_list]
        fields =['name', 'quantity']
        widgets = {
            'name':forms.Select(choices = choice_tuple_list),
            'quantity':forms.NumberInput(attrs={'class':'form-control','placeholder':'quantity'})
        }

class ImageEntryForm(forms.ModelForm):
    class Meta:
        model = ImageObject

        fields =['name','image']
        widgets = {
            'name':forms.TextInput(attrs={'class':'form-control','placeholder':'name'}),
        }

class ToDoForm(forms.ModelForm):
    class Meta:
        model = ToDoItem

        fields =['name','description', 'date']
        widgets = {
            'name':forms.TextInput(attrs={'class':'form-control','placeholder':'name'}),
            'description':forms.TextInput(attrs={'class':'form-control','placeholder':'description'}),
            'date':forms.DateInput(format=('%m/%d/%Y'), attrs={'class':'form-control', 'placeholder':'Select a date', 'type':'date'})
        }
