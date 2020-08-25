import { User } from './user.model';
export class Task {
     _id: string;
     title: string;
     description: string;
     category: string ;
     owner: User;
 }