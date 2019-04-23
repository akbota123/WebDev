import { Component, OnInit } from '@angular/core';
import { ITaskDetail } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-task-list-task',
  templateUrl: './task-list-task.component.html',
  styleUrls: ['./task-list-task.component.css']
})
export class TaskListTaskComponent implements OnInit {

  public tasks: ITaskDetail[] = [];
  public taskList: any = {};
  public taskName: string = ""
  public taskDueOn: any = new Date().toISOString()
  public taskStatus: string = ""
  public id: number;

  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
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
