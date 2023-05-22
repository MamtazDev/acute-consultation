import { IsArray, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateDoctorDto{
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly position: string;

    @IsString()
    @IsNotEmpty()
    readonly speciality: string;

    @IsNumber()
    @MaxLength(4)
    @IsNotEmpty()
    readonly fees: number;

    @IsArray()
    readonly slots: string[];
}