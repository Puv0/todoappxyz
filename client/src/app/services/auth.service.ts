import { environment } from './../../environments/environment.prod';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;
   helper = new JwtHelperService();
  token;
  user = { email:String, password:String};
  decodeToken;
  constructor(private http: HttpClient, private router:Router) { }


  login(email:string, password:string){
    console.log('email:'+ email);
    
    this.http.post(this.apiUrl+'/login',{email:email, password:password})
  .subscribe( (data:any) =>{
    
    console.log(data);
    this.router.navigate(['home-page']);
    localStorage.setItem('auth_token',data.value);
    this.token = data.value ;
    this.decodeToken =  this.helper.decodeToken(this.token);
    window.alert('Welcome ! '+ this.decodeToken.user.nickname);
  })
}
signup(email:string, nickname:string,password:string){
  this.http.post(`${this.apiUrl}/${'signup'}`, {email:email,nickname:nickname,password:password})
  .subscribe((data:any) =>{
    this.router.navigate(['login']);
    window.alert('Thanks for signup ! '+ data.nickname)
  })
}
  logout(){
    localStorage.removeItem('auth_token')
    this.router.navigate(['login']);

  }
  public get getUser(){
    
    return this.decodeToken.user ;
  }

  public getToken(): string{
    return localStorage.getItem('auth_token')
  }
  public get islogIn(): boolean {

    
    if(!this.token) {
     

      return false;
    }
    else{
      return true;
    }
  }

}
