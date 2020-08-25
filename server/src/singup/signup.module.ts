import { SignupService } from './signup.service';
import { UserSchema } from '../user/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { SignUpController } from './signup.controller';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'User', schema:UserSchema}]
    )],
  controllers: [SignUpController],
  providers: [SignupService]
})
export class SignUpModule {}