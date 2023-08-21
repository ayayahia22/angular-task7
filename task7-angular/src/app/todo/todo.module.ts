import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { TodoRoutingModule } from './todo-routing.module';
import { TaskComponent } from './task/task.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,MatButtonModule,MatPaginatorModule,FormsModule, MatFormFieldModule,
    MatFormFieldModule,MatPaginatorModule
  ]
})
export class TodoModule {
  constructor() {
    
  }
}
