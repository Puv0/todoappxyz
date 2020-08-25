import { UserSignUpDto } from '../user/dto/user.dto';
import { User } from '../user/interfaces/user.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import secret from '../../secret';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const toHash = secret.myPlaintextPassword;

@Injectable()
export class SignupService {

    constructor(@InjectModel('User') private readonly userModel: Model<User> ) {}
    
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
         
        

    

}