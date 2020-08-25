import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  apiUrl = environment.apiUrl
  user =  User;
  constructor(private http:HttpClient) {
    
      
       
     }
    
 


    getUsers(id: string): Observable<User> {
      return this.http.get<User>(`${this.apiUrl}/user/${id}`)
      
    }
  }

