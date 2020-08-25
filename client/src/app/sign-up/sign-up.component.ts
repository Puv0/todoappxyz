import { AuthService } from './../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl(''),
    nickname: new FormControl(''),
    password:new FormControl('')
  })

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

    onSubmit(){
      this.authService.signup(this.userForm.value.email,this.userForm.value.nickname,this.userForm.value.password);
    }
}
