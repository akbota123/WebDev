import { Component, OnInit } from '@angular/core';
import { ITaskList } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public taskLists: ITaskList[] =[];
  public taskListName: string = ""

  constructor(
    private provider: ProviderService,
    private location: Location
  ) { }

  ngOnInit() {
    this.provider.getTaskLists().then(res => {
      this.taskLists = res;
    })
  }

  navigateBack() {
    this.location.back()
  }

  createTaskList(){
    if(this.taskListName != ''){
    this.provider.createTaskList(this.taskListName).then(res => {
      this.taskLists.push(res)
    })
  }
  }
}
