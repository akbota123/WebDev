import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListDetailComponent } from './task-list-detail/task-list-detail.component';
import { TaskListTaskComponent } from './task-list-task/task-list-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ProviderService } from './shared/services/provider.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TaskListComponent,
    TaskListDetailComponent,
    TaskListTaskComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
