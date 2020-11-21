from django.contrib import admin
from .models import *
# Register your models here.
class DiaryAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'd_date' ,'user']
    search_fields = ['title', 'user']
    readonly_fields = ['d_date']

    filter_horizontal = []
    filter_vertical = []
    fieldsets = []

class InventoryObjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'quantity', 'user']
    search_fields = ['name', 'user']
    readonly_fields = []

    filter_horizontal = []
    filter_vertical = []
    fieldsets = []

class ToDoItemAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'date', 'user']
    search_fields = ['name', 'date', 'user']
    readonly_fields = []

    filter_horizontal = []
    filter_vertical = []
    fieldsets = []

admin.site.register(Diary, DiaryAdmin)
admin.site.register(InventoryObject, InventoryObjectAdmin)
admin.site.register(ImageObject)
admin.site.register(ToDoItem, ToDoItemAdmin)
