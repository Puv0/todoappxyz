import { UserSchema } from './../user/schemas/user.schema';
import { TaskSchema } from './schemas/task.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './task.controller';
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';

@Module({
    imports: [
        MongooseModule.forFeature([
                {name:'Task', schema: TaskSchema},
                {name:'User', schema: UserSchema}
        ]
        )],
    controllers: [TaskController],
    providers: [TaskService],

})
export class TaskModule {}
