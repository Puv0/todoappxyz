import { Task } from './../models/task.model';
import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';
import { TaskService } from './../services/task.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  id:string;
  tasks: any [] ;

  constructor(private readonly taskService:TaskService,
    private readonly authService:AuthService,
    private readonly userService:UserService,
    private SpinnerService: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.id = this.authService.getUser._id ; 
    this.SpinnerService.show();
    this.getTasks();
    setTimeout(()=>{
      this.tasks = this.taskService.getArray ;
      console.log('fasfasd"',this.tasks[0]); 
      this.SpinnerService.hide();
    }, 1500);
       

    

  }

 
  async getTasks(){
    return await this.taskService.getTasks(this.id);
  }
 
  

  
}
