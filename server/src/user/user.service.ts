import { UserDto, UserSignUpDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import secret from '../../secret';
import { Task } from 'src/task/interfaces/task.interfaces';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const toHash = secret.myPlaintextPassword;

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>, ) {}
    
    async converToHash(value:string): Promise<string> {
        let hashPass ;
        await bcrypt.hash(`${toHash}${value}`, saltRounds).then(hash =>{
            hashPass = hash;
        })
        return hashPass;
    }

    async comparePass(password,hash){
        const match = await bcrypt.compareSync(`${toHash}${password}`, hash);
        return await match ;
    }

    async create(userDto:UserSignUpDto){
        const createdUser = new this.userModel(userDto);
        return await createdUser.save();
        
     }
         
        

    async getAll(){
        return await this.userModel.find().exec();
    }
    
    async getOne(id:string): Promise<User>{
        return await this.userModel.findById(id)

        
    }

   

    async update(id:string, userDto:UserDto): Promise<User>{

        return await this.userModel.findByIdAndUpdate(id, userDto);

    }

    async delete(id:string, userDto:UserDto): Promise<User>{
        return await this.userModel.findByIdAndRemove(id);
    }

}
