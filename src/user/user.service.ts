import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { IUser } from 'src/interface/user.interface';

@Injectable()
export class UserService {
constructor(@InjectModel('User') private userModel:Model<IUser>){

}

async createUser(createUserDto:CreateUserDto):Promise<IUser>{
    const newUser = await new this.userModel(createUserDto)
    return newUser.save()

}

}
