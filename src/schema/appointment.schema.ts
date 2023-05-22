import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'

@Schema()
export class Appointment{
    @Prop()
    patientName: string;
    @Prop()
    slot: string;
    @Prop()
    email: string;
    @Prop()
    phone: string;
    @Prop()
    date:string;   
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment)