import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListTaskComponent } from './task-list-task.component';

describe('TaskListTaskComponent', () => {
  let component: TaskListTaskComponent;
  let fixture: ComponentFixture<TaskListTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
