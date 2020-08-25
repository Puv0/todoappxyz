import { Task } from './../../task/interfaces/task.interfaces';
import { Document } from 'mongoose';


export interface User extends Document{
    
    readonly email:string,
    readonly nickname:string,
    readonly password:string,
    readonly tasks: Task[],
    
    
}