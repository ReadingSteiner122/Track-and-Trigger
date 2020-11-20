from rest_framework

from users.models import CustomUser

class RegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style=('input_type':'password'), write_only=True)

    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'name', 'phone_no', 'password', 'password2']
        extra_kwargs = {
            'password':['write_only': True]
        }
