import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, todo } from '../todo/user';

@Injectable({
  providedIn: 'root'
})
export class DeleteToDoService {
  constructor(private http: HttpClient) { }

  deleteToDo(userName: string, password: string,id:number):Observable<todo[]> {
    const token = btoa(userName + ':' + password)
    return this.http.delete<todo[]>(`http://localhost:4000/todos/${id}`, {
      headers: { 'Authorization': 'Basic ' + token },
    }
    );
}}
