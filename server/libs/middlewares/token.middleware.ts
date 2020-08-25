
import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import secret from 'secret';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const authJsonWebToken = req.headers.authorization;
    if(req.baseUrl === "/api/signup"){
        next();
        return;
    }
    else if (req.baseUrl !=="/api/login") {
        if(!authJsonWebToken){
            next();
            throw new HttpException(
                "Login didn't happend", 
                HttpStatus.FORBIDDEN
            )
        }else{
            try {
                const user = jwt.verify(authJsonWebToken.slice(7,authJsonWebToken.length), secret.jwTtext);
                
                if(user){
                    req['user'] = user ;
                    next();
                }else {
                    throw new HttpException(
                        'something wrong',
                        HttpStatus.GATEWAY_TIMEOUT
                    )
                }
            }
            catch(err){
                throw new HttpException('Jwt could not foud', HttpStatus.FORBIDDEN);
            }
        }
        
    }else{
        next();
        return;
    }
  }
}
