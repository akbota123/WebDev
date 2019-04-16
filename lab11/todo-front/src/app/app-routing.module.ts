import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';
import { TaskListDetailComponent } from './task-list-detail/task-list-detail.component';
import { TaskListTaskComponent } from './task-list-task/task-list-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'task_list', component: TaskListComponent},
  {path: 'task_list/:id', component: TaskListDetailComponent},
  {path: 'task_list/:id/task', component: TaskListTaskComponent},
  {path: 'task/:id', component: TaskDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }