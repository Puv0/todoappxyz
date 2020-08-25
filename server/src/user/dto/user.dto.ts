import { Task } from "src/task/interfaces/task.interfaces"
export class UserDto{
    
     email:string
     nickname:string 
     password:string
     tasks:Task[] 
}

export class UserLoginDto{
     readonly email:string
     readonly password:string
}

export class UserSignUpDto{
     email:string
     nickname:string
     password:string
}