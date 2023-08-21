import { CanActivateFn, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';
import { inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TaskComponent } from './task/task.component';
import { HttpParams } from '@angular/common/http';

export const authGuard: CanActivateFn = (

  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {


  const loginService = inject(LoginService);
  const router = inject(Router);


  return  true

};
