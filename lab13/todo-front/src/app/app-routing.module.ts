import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';
import { TaskListDetailComponent } from './task-list-detail/task-list-detail.component';
import { TaskListTaskComponent } from './task-list-task/task-list-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: 'task_lists', component: MainComponent},
  {path: 'task_lists', component: TaskListComponent},
  {path: 'task_lists/:id', component: TaskListDetailComponent},
  {path: 'task_lists/:id/tasks', component: TaskListTaskComponent},
  {path: 'tasks/:id', component: TaskDetailComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
