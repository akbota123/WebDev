from api.serializers import UserModelSerializer
from rest_framework.generics import CreateAPIView


class Register(CreateAPIView):
    authentication_classes = ()
    permission_classes = ()
    serializer_class = UserModelSerializer

    def perform_create(self, serializers):
        return serializers.save()