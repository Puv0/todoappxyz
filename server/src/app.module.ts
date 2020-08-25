import { TokenMiddleware } from './../libs/middlewares/token.middleware';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import {MongooseModule} from '@nestjs/mongoose'
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import secret from 'secret';
import { SignUpModule } from './singup/signup.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [UserModule,
  TaskModule,
  MongooseModule.forRoot(secret.mongoUrl),
  LoginModule,
  SignUpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

configure(consumer:MiddlewareConsumer){
  consumer
  .apply(TokenMiddleware)
  .exclude(
    {path:'signup', method: RequestMethod.POST}
  )
  .forRoutes({path: '*', method: RequestMethod.ALL});
}

}
