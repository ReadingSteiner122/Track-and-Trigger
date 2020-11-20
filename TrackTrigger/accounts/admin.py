from django.contrib import admin
from accounts.models import Profile
from django.contrib.auth.admin import UserAdmin
# Register your models here.

class ProfileAdmin(UserAdmin):
    list_display = ('username', 'email', 'phone_no', 'date_joined', 'last_login')
    search_fields = ('username', 'email')
    readonly_fields = ('date_joined', 'last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(Profile, ProfileAdmin)
