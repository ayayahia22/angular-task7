import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, todo } from '../todo/user';

@Injectable({
  providedIn: 'root'
})
export class AddToDoService {

  constructor(private http: HttpClient) { }

  addToDo(userName: string, password: string,newbody:any):Observable<todo[]> {
    const token = btoa(userName + ':' + password)
    return this.http.post<todo[]>(`http://localhost:4000/todos/`,newbody, {
      headers: { 'Authorization': 'Basic ' + token,
      'Content-Type': 'application/json'}
    }
    );
}}
