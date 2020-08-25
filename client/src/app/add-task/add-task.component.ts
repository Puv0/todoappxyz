import {  NgxSpinnerService } from 'ngx-spinner';
import { FormControl,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  categories = [
    {name: "Sport"},
    {name: "HouseWork"},
    {name: "School"}

  ]
  constructor(private readonly taskService:TaskService,
    private readonly authService:AuthService,
    private readonly SpinnerService:NgxSpinnerService
    ) { }

    id: string ;  

  addTaskForm = new FormGroup({
    title : new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(this.categories)
  });


  ngOnInit(): void {
    this.id = this.authService.getUser._id; 
    
  }


 async onSubmit(){
  this.SpinnerService.show();
    await this.taskService.addTask(this.addTaskForm.value.title, this.id , this.addTaskForm.value.description, this.addTaskForm.value.category.name);
    this.SpinnerService.hide();
  }
}
