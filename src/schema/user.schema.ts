import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'

@Schema()
export class User{
    @Prop()
    name:string;
    @Prop({required:true, unique:true})
    email:string;
    @Prop({required:true})
    address: string;
    @Prop()
    password:string;

}

export const UserSchema = SchemaFactory.createForClass(User)