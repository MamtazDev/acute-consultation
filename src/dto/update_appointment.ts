import {PartialType} from "@nestjs/mapped-types"
import { CreateAppointmentDto } from "./create-appointment";

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto){}