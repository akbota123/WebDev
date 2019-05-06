from django.urls import path
from api.views.auth import Register
from api.views.GCB_views import TaskListListCreate, TaskDetailUpdateDelete, TaskListCreate, TaskListDetailUpdate
from api.views.FBV_views import task_lists, task_list_detail, task_detail, task_list_tasks
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('register/', Register.as_view()),
    path('login/', obtain_jwt_token),

    #Function based views
    path('task_lists_fbv/', task_lists),
    path('task_lists_fbv/<int:pk>/', task_list_detail),
    path('task_lists_fbv/<int:pk>/tasks/', task_list_tasks),
    path('tasks_fbv/<int:pk>/', task_detail),

    #generics based views
    path('task_lists_gen/', TaskListListCreate.as_view()),
    path('task_lists_gen/<int:pk>/', TaskDetailUpdateDelete.as_view()),
    path('task_lists_gen/<int:pk>/tasks', TaskListCreate.as_view()),
    path('tasks_gen/', TaskListDetailUpdate.as_view())
]