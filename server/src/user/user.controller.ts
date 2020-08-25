import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Controller, Post, Body, Get, Delete, Param,Put } from '@nestjs/common';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Post()
    async create(@Body() userDto:UserDto ){
        userDto.password = await this.userService.converToHash(userDto.password);
        return this.userService.create(userDto);
    }
    
    
    @Get()
    getAll(){
        return this.userService.getAll();
    }
    @Get(':id') 
    getOne(@Param('id') id: string) {

        return this.userService.getOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id:string, @Body() UserDto:UserDto){
        return this.userService.delete(id,UserDto);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body()userDto:UserDto){

        return this.userService.update(id,userDto);
    }
}
