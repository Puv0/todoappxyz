import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  
    email: {type:String},
    nickname:{type:String, required:[true, 'Nickname is required']},
    password:{type:String, required:[true, 'Password is required']},
    tasks:[{type:mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    updateAt:{type:Date, default:Date.now},
  

}) 