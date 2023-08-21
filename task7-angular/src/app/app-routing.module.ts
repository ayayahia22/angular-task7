import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './todo/task/task.component';
import { TodoModule } from './todo/todo.module';
import { authGuard } from './todo/auth.guard';
import { TodocComponent } from './view-to-do/todoc/todoc.component';
// import { UserDataResolver } from './view-to-do/user-data.resolver';
// import { todoResolver } from './view-to-do/todo.resolver';

const routes: Routes = [
  // { path:'', component: TaskComponent},
  {
    path: '',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  }
  ,{path:'pac',component:TodocComponent ,canActivate:[authGuard]
  }
];
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
