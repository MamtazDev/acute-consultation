import {IsString, IsNotEmpty} from "class-validator"

export class CreateAppointmentDto{
    @IsString()
    @IsNotEmpty()
    readonly  patientName: string;

    @IsString()
    @IsNotEmpty()
    readonly slot: string;

    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly  phone: string;

    @IsString()
    @IsNotEmpty()
    readonly  date:string; 
}