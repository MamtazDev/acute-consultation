import { Body,Controller, Post, Get, Param  } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from 'src/interface/user.interface';
import * as bcrypt from 'bcrypt';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('/signup')
    async createUser(
        @Body('password') password: string,
        @Body('username') username: string
    ):Promise<IUser>{
        const saltOrRounds =10
        const password = await bcrypt.hash(password, saltOrRounds)
        const result = await this.userService.createUser(username, password)
        return
    }
}
