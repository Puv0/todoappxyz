import * as mongoose from 'mongoose';


export const TaskSchema = new mongoose.Schema({

    title: { type:String, required:true},
    user: {type:mongoose.Schema.Types.ObjectId,
        ref:'User' ,required:true},
    description: {type:String, required:false},
    category: {type:String,required:true},
    updateAt:{type:Date, default:Date.now}
})