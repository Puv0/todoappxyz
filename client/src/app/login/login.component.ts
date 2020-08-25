import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl(''),
    password:new FormControl('')
  })
  
  constructor(
    private authService:AuthService
  ) {
   }

   onSubmit(){
    
    this.authService.login(this.userForm.value.email,this.userForm.value.password);
   }

  ngOnInit(): void {
  }

}
