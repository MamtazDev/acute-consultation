import { Controller, Post, Put, Res, Param, HttpStatus, Delete,Get,Body, } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from 'src/dto/create-doctor.dto';
import { UpdateDoctorDto } from 'src/dto/update-doctor.dto';

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService:DoctorService){

    }
   @Post()
   async createDoctor(@Res() response, @Body() crateDoctorDto:CreateDoctorDto ){
    try {
        const newDoctor = await this.doctorService.createDoctor(crateDoctorDto)
        return response.status(HttpStatus.CREATED).json({
            message: "Doctor has been created successfully",
            newDoctor,
        })
    } catch (err) {
        return response.status(HttpStatus.BAD_REQUEST).json({
            status:400,
            message: "Error Doctor not created",
            error: "Bad Request"
        })
    }
   }

   @Get()
   async getDoctors(@Res() response){
    try {
        const doctorsData = await this.doctorService.getAllDoctors()
        return response.status(HttpStatus.OK).json({
            doctorsData
        })
    } catch (err) {
        return response.status(err.status).json(err.response)
    }
   }

   @Get("/:id")
   async getADoctor(@Res() response, @Param('id') doctorId: string){
    try {
        const doctorData = await this.doctorService.getDoctor(doctorId)
        return response.status(HttpStatus.OK).json({
            doctorData
        })
    } catch (err) {
        return response.status(err.status).json(err.response);
    }
   }

   @Put("/:id")
   async updateDoctor(@Res() response, @Param('id') doctorId: string, @Body() updateDoctorDto:UpdateDoctorDto){
    try {
        const updatedDoctor = await this.doctorService.updateDoctor(doctorId,updateDoctorDto)
        return response.status(HttpStatus.OK).json({
            message: "Doctor found successfully",
            updatedDoctor
        })
    } catch (err) {
        return response.status(err.status).json(err.response);
    }
   }

   @Delete("/:id")
   async deleteDoctor(@Res() response, @Param("id") doctorID:string){
    try {
        const deletedDoctor = await this.doctorService.deleteDoctor(doctorID)
        return response.status(HttpStatus.OK).json({
            message: "Doctor found successfully",
            deletedDoctor
        })
    } catch (err) {
        return response.status(err.status).json(err.response);
    }
   }
   
}
