import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { ITaskLong, ITaskShort, ITaskList } from '../shared/models/models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-task-list-task',
  templateUrl: './task-list-task.component.html',
  styleUrls: ['./task-list-task.component.scss']
})
export class TaskListTaskComponent implements OnInit {

  public tasks: ITaskShort[] = [];
  public taskList: any = {};
  public id: number;
  public taskName: string = ""
  public taskDueOn: any = new Date().toISOString()
  public taskStatus: string = ""

  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    private location: Location,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if(this.auth.isAuthenticated){
      this.id = parseInt(this.route.snapshot.paramMap.get('id'))
      if(this.id){
        this.provider.getTaskListTasks(this.id).then(res => {
          this.tasks = res
        })
        this.provider.getTaskListDetail(this.id).then(res => {
          this.taskList = res
        })
      }
    }
  }

  navigateBack(){
    this.location.back()
  }

  createTask(){
    if(this.taskName != '' && this.taskDueOn != '' && this.taskStatus != ''){
      this.provider.createTask(this.taskList.id, this.taskName, this.taskDueOn, this.taskStatus).then(res => {
        this.tasks.push(res)
      })
    }
  }

}
