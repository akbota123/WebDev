from django.urls import path
from api.views import CBV_views, GCBV_views, FBV_views

urlpatterns = [
    #Function based views
    path('task_lists/', FBV_views.task_lists),
    path('task_lists/<int:pk>/', FBV_views.task_list_detail),
    path('task_lists/<int:pk>/tasks/', FBV_views.task_list_tasks),
    path('tasks/<int:pk>/', FBV_views.task_detail)
]