// import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
// import { GetToDosService } from './get-to-dos.service';
// import { Inject } from '@angular/core';
// import { todo } from '../todo/user';
// import { Observable, of } from 'rxjs';
// export const todoResolver = (gettodo:GetToDosService, route:ActivatedRoute,
//    state:RouterStateSnapshot): Observable<todo[]> => {

//  let userName: string = '';
//  let password: string = '';
//   //   const queryParams = route.queryParams;
//   // const username = queryParams['userName'];
//   // const password = queryParams['password'];
//   // return  gettodo.getToDos(username, password);

//   userName= route.snapshot?.queryParamMap.get('userName')!;
//   ;
//  password = route.snapshot?.queryParamMap.get('userName')!;

//     // if (userName) {


//       // Check the value of userName and perform any necessary validation
//       if (typeof userName === 'string') {
//         // Assuming the username is valid, fetch the data
//         return gettodo.getToDos(userName,password);
//       } else {
//         // Handle invalid username case, e.g., redirect or show an error
//         // You can also return an empty array or some default data
//         // For example:
//         return  of([{
//           userId:2,

//           id:2,
//           title:"string",
//           completed:true,
//         }]);
//       }
//     } else {
//       // Handle the case where userName is not present in queryParams
//       // You can return an empty array or handle it based on your needs
//       return of([{userId:22,

//         id:22,
//         title:"string",
//         completed:true,
//       }]);
//     }
// };
