import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  task : Task;
  constructor(private route: ActivatedRoute,
    private taskService:TaskService) { }

  ngOnInit(): void {
    this.getTaskDetail(this.route.snapshot.params.id)
  }


  async getTaskDetail(id:string){
   return await this.taskService.getTask(id)
    .subscribe((data:any)=>{
      this.task = data ;
      console.log('task', this.task);
      console.log('data:', data);
    })    
    
  }
}
