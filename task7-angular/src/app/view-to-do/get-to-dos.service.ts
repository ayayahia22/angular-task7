import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from '../todo/user';

@Injectable({
  providedIn: 'root'
})
export class GetToDosService {

  constructor(private http: HttpClient) { }

  getToDos(userName: string, password: string):Observable<todo[]> {
    const token = btoa(userName + ':' + password)
    return this.http.get<todo[]>('http://localhost:4000/todos/', {
      headers: { 'Authorization': 'Basic ' + token },
    }
    );
  }
  }

