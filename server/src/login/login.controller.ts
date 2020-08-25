import { LoginService } from './login.service';
import { UserLoginDto } from './../user/dto/user.dto';
import { Controller, Post, Body, Param } from '@nestjs/common';
import { User } from 'src/user/interfaces/user.interface';

@Controller('login')
export class LoginController {
    
    constructor(private readonly loginService:LoginService){}

    @Post()
    async loginUser(@Param('id') id:string, @Body() userLoginDto:UserLoginDto ): Promise<User>{
        return await this.loginService.userLogin(userLoginDto,id);
    }
}
