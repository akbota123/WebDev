from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from api.models import TaskList, Task
from api.serializers import TaskSerializer, TaskListSerializer

class TaskListList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return TaskList.objects.for_user(self.request.user)

    def get_serializer_class(self):
        return TaskSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class TaskListDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskListSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return TaskList.objects.for_user(self.request.user)


class TasksList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = TaskSerializer
    lookup_field = 'task_list_id'

    def get_queryset(self):
        task_list =TaskList.objects.for_user(self.request.user).get(pk=self.kwargs[self.lookup_field])
        return task_list.tasks.all()

    def perform_create(self, serializer):
        task_list = TaskList.objects.for_user(self.request.user).get(pk=self.kwargs[self.lookup_field])


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskListSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return Task.objects.for_user(self.request.user)



