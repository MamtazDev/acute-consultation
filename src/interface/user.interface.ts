import { Document } from "mongoose";

export interface IUser extends Document{
    readonly name:string;
    readonly email:string;
    readonly address: string;
    readonly password:string;
}
