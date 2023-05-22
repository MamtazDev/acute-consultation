import{Prop, Schema, SchemaFactory} from  '@nestjs/mongoose'

@Schema()
export class Doctor{
    @Prop()
    name: string;
    @Prop()
    position: string;
    @Prop()
    speciality: string;
    @Prop()
    fees: number;
    @Prop({type:[String], default:[]})
    slots: string[];
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor)