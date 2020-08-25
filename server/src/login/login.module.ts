import { UserService } from './../user/user.service';
import { UserSchema } from './../user/schemas/user.schema';
import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'User', schema:UserSchema}]
    )],
  providers: [LoginService,UserService],
  controllers: [LoginController]
})
export class LoginModule {}
