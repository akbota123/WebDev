import { EventEmitter, Injectable } from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import { ITaskList, ITask } from '../models/models';
import { ITaskDetail } from '../models/models';

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

  getTaskListTasks(id: number): Promise<ITaskDetail[]> {
    return this.get(`http://localhost:8000/task_list/${id}/task/`, {});
  }

  getTaskDetail(id: number): Promise<ITask> {
    return this.get(`http://localhost:8000/task/${id}/`, {});
  }
}
