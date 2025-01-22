import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  // declarations:  All of the components that need to work together
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  // exports: List ONLY the components/modules that must be made
  // available by consumers of this module
  exports: [TasksComponent],
  // imports: dependencies for this component
  imports: [SharedModule, CommonModule, FormsModule],
})
export class TasksModule {}
