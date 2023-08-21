import { Injectable } from '@angular/core';
import { User, post } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


 user: User[] =[];
 public getUser(): Observable<User[]> {
  return this.http.get<User[]>('http://localhost:4000/users/');
}

  posta: post[] | undefined;

  constructor(private http: HttpClient) { }
}
  // public sendUser(email: string, password: string):Observable<post[]> {

  //   return this.http.get<post[]>('https://jsonplaceholder.typicode.com/users')

  // }
