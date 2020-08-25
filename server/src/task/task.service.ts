import { User } from './../user/interfaces/user.interface';
import { TaskDto } from './dto/task.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/task.interfaces';
import{Model, model} from 'mongoose';

@Injectable()
export class TaskService {

    constructor(@InjectModel('Task') private readonly taskModel:Model<Task>,
    @InjectModel('User') private readonly userModel: Model<User>
    ){}


    async create(taskDto:TaskDto): Promise<Task>{
        const  createdTask = new this.taskModel(taskDto);
         
        const owner = await this.userModel.findById(createdTask.user).exec();
        console.log('this.owner:', owner);
        owner.tasks.push(createdTask);
        owner.save();
        console.log(owner);

        return await createdTask.save();
    }

    async getAll(){
        
        return await this.taskModel.find().exec();
  
    }

    async getOne(id: string): Promise <Task>{

        return await this.taskModel.findById(id).exec();
    }

    async getUsersTask(id:string): Promise <any> {
       return await this.userModel.findById(id)
       .select('tasks')
       .populate('tasks')
       .exec();
       
    }
 

    async update(id:string, taskDto:TaskDto): Promise<Task>{

        return await this.taskModel.findByIdAndUpdate(id,taskDto);
    }

    async delete(id:string, taskDto:TaskDto): Promise<Task>{

        return await this.taskModel.findByIdAndRemove(id);
    }
}
