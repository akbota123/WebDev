from django.shortcuts import render
from .models import TaskList, Task
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import TaskListSerializer, TaskSerializer


# Create your views here.
@api_view(['GET', 'POST'])
def list(request):
    if request.method == "GET":
        task_lists = TaskList.objects.all()
        serializer = TaskListSerializer(task_lists, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = TaskListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
 


@api_view(['GET', 'PUT', 'DELETE'])
def list_id(request, pk):
    try:
        task_list = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist as e:
        return Response({'error': f'{e}'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = TaskListSerializer(task_list)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = TaskListSerializer(instance=task_list, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    elif request.method == "DELETE":
        task_list.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def task(request, pk):
    try:
        tasks = TaskList.objects.get(id=pk)
    except Task.DoesNotExist as e:
        return Response({'error': f'{e}'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        tasks = tasks.tasks.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user, task_list=tasks)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
def task_detail(request, pk):
    try:
        detail = Task.objects.get(id=pk)
    except Task.DoesNotExist as e:
        return Response({'error': f'{e}'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = TaskSerializer(task)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = TaskSerializer(instance=task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    elif request.method == "DELETE":
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

