import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

   id:string
   user: User = {_id:"", nickname:"", email:"", task:[]}
;  constructor(private authService:AuthService,
    private userService:UserService) { }

  ngOnInit(): void {

    this.id = this.authService.getUser._id ; 
     this.getUser();
    
  }

  logOut(){
    return this.authService.logout();
  }


async getUser() { 
  await this.userService.getUsers(this.id)
    .subscribe((data:any) =>{
      this.user = data ;
    })
    return await this.user ;
  }

}


