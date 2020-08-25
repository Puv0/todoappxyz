import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';
import { Controller, Post, Get, Body, Param,Put, Delete, Patch } from '@nestjs/common';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Post()   
    create(@Body() taskDto: TaskDto)
    {

        return this.taskService.create(taskDto);
    }

    @Get() 
    getAll() {

        return this.taskService.getAll();
    }

    @Get('a/:id')
    getTask(@Param('id') id: string){
        return this.taskService.getOne(id);
    }
    @Get(':id')
    getUserTasks(@Param('id') id :string){
        return this.taskService.getUsersTask(id);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body()taskDto:TaskDto){

        return this.taskService.update(id,taskDto);
    }

    @Delete(':id')
    delete(@Param('id')id:string,@Body()taskDto:TaskDto){
        return this.taskService.delete(id,taskDto);
    }




}





