import { UserLoginDto } from './../user/dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/interfaces/user.interface';
import { Model } from 'mongoose';
import * as jwt from'jsonwebtoken';
import secret from '../../secret';

@Injectable()
export class LoginService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>,
    private readonly userService: UserService) { }

    async userLogin(user: UserLoginDto, id: string): Promise<any> {
        try {
            const existUser = await this.userModel
                .findOne({
                    email:user.email
                }).exec();

            if (existUser) {
                let checkPass;
                await this.userService.comparePass(user.password, existUser.password)
                    .then(respond => {
                        if (respond) {
                            checkPass = true;
                        } else {
                            checkPass = false;
                        }
                    }
                    )
                if (checkPass) {
                    const authJsonToken = jwt.sign({user:existUser}, secret.jwTtext)
                    
                    return await { succes:true, value: authJsonToken }
                }
                else {
                    return await { succes:false, response: 'Password is incorrect' }
                }

            }
            else {
                return await { succes: false, response: 'User doesnt exist' };
            }
        }
        catch (err) {

            return await {
                succes: false,
                response: 'Something went wrong',
                exception: err
            }
        }
    }
}
