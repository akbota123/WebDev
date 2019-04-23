from django.urls import path
from . import views

urlpatterns=[
    path('task_list/', views.list),
    path('task_list/<int:pk>/', views.list_id),
    path('task_list/<int:pk>/task/', views.task),
    path('task/<int:pk>', views.task_detail)
]