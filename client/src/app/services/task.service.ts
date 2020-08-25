import { environment } from './../../environments/environment';
import { Task } from './../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  apiUrl = environment.apiUrl ;
   tasks: Task[]; 
   task : Task;

   async getTasks(id: string) {
     return await this.http.get<any>(`${this.apiUrl}/task/${id}`)
    .subscribe(
      data => {
       this.tasks = data.tasks ;
       console.log(this.tasks)
       
        
      }
    )
    
  }

  async addTask(title:string, user:string, description:string, category:string){
    return await this.http.post(`${this.apiUrl}/task`, {title:title, user:user, description:description, category:category})
    .subscribe((data:any)=>{
      console.log('Adding task:', data);
    })
  }

   get getArray(): Task[]{
   return this.tasks ;
 }

  getTask(id:string): Observable<any>{
   return this.http.get<Task>(`${this.apiUrl}/task/a/${id}`)
  
 }

}
