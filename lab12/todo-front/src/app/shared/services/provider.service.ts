import { EventEmitter, Injectable } from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import { ITaskList, ITask } from '../models/models';
import { ITaskDetail, ITaskNew } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
   }
   
   public sendMessage = new EventEmitter<string>();

   getTaskLists(): Promise<ITaskList[]> {
    return this.get('http://localhost:8000/task_list/', {});
  }

  getTaskListDetail(id: number): Promise<ITaskList> {
    return this.get(`http://localhost:8000/task_list/${id}/`, {});
  }

  createTaskList(name: any): Promise<ITaskList> {
    return this.post('http://localhost:8000/task_list/', {
      name: name
    });
  }

  updateTaskList(taskList: ITaskList): Promise<ITaskList> {
    return this.put(`http://localhost:8000/task_list/${taskList.id}/`, {
      name: taskList.name
    });
  }

  deleteTaskList(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/task_list/${id}/`, {});
  }

  getTaskListTasks(id: number): Promise<ITaskDetail[]> {
    return this.get(`http://localhost:8000/task_list/${id}/task/`, {});
  }

  getTaskDetail(id: number): Promise<ITask> {
    return this.get(`http://localhost:8000/task/${id}/`, {});
  }

  createTask(taskListId: number, name: string, due_on: string, status: string): Promise<ITaskNew> {
    return this.post(`http://localhost:8000/task_list/${taskListId}/task/`, {
      name: name,
      due_on: due_on,
      status: status
    });
  }

  updateTask(task: ITaskNew): Promise<ITaskNew> {
    return this.put(`http://localhost:8000/task/${task.id}/`, {
      name: task.name,
      due_on: task.due_on,
      status: task.status
    });
  }

  deleteTask(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/task/${id}/`, {});
  }
}
