import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodocComponent } from './todoc/todoc.component';

const routes: Routes = [
  {path: '', component: TodocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewToDoRoutingModule { }
