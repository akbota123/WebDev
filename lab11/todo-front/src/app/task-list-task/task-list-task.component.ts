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
}
