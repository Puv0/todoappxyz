import { SignupService } from './signup.service';
import { UserDto } from './../user/dto/user.dto';
import { Controller, Post, Body, Get, Delete, Param,Put } from '@nestjs/common';

@Controller('signup')
export class SignUpController {

    constructor(private SignupService:SignupService){}

    @Post()
    async create(@Body() userDto:UserDto ){
        userDto.password = await this.SignupService.converToHash(userDto.password);
        return this.SignupService.create(userDto);
    }
    
    
    
}