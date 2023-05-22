import { Document } from "mongoose";


export interface IDoctor extends Document{
    readonly name: string;
    readonly position: string;
    readonly speciality: string;
    readonly fees: number;
    readonly slots: string[];

}