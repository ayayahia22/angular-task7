// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
// import { User, todo } from '../todo/user';
// import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { GetToDosService } from './get-to-dos.service';
// import {NGXLogger } from 'ngx-logger'; // Use 'Logger' instead of 'NGXLogger'

// @Injectable({
//   providedIn: 'root'
// })
// export class UserDataResolver implements Resolve<todo[]> {
//   constructor(private http: HttpClient, private getToDos: GetToDosService,private logger: NGXLogger) {}

//   resolve(route: ActivatedRouteSnapshot): Observable<todo[]> {
//     const queryParams = route.queryParams;
//     const userName = queryParams['userName'];
//     const password = queryParams['password'];
// // const token =  btoa(userName +':'+password);
// console.log(token , 'hhhhhh')
// this.logger.debug('Debug message');
//     return this.getToDos.getToDos(userName, password,token);
//   }



//   someMethod() {

//     this.logger.info('Info message');
//     this.logger.warn('Warning message');
//     this.logger.error('Error message');
//   }
// }
