import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDoctorDto } from 'src/dto/create-doctor.dto';
import { UpdateDoctorDto } from 'src/dto/update-doctor.dto';
import { IDoctor } from 'src/interface/doctor.interface';

@Injectable()
export class DoctorService {
    constructor(@InjectModel('Doctor') private doctorModel:Model<IDoctor>){

    }

    async createDoctor(createDoctorDto:CreateDoctorDto):Promise<IDoctor>{
        const newDoctor = await new this.doctorModel(createDoctorDto)
        return newDoctor.save()
    }
    
    async getAllDoctors():Promise<IDoctor[]>{
        const doctorsData = await this.doctorModel.find({})
        if(!doctorsData || doctorsData.length==0){
            throw new NotFoundException("Doctors Data not found")
        }
        return doctorsData
    }

    async getDoctor(doctorId:string):Promise<IDoctor>{
        const doctor = await this.doctorModel.findById(doctorId)

        if(!doctor){
            throw new NotFoundException(`Doctor not found`)
        }
        return doctor
    }

    async updateDoctor(doctorId:string, updateDoctorDto:UpdateDoctorDto):Promise<IDoctor>{
        const updatedDoctor = await this.doctorModel.findByIdAndUpdate(doctorId, updateDoctorDto,{new:true})
        if(!updatedDoctor){
            throw new NotFoundException("Doctor no found")
        }
        return updatedDoctor
    }

    async deleteDoctor(studentId:string):Promise<IDoctor>{
        const deletedDoctor = await this.doctorModel.findByIdAndDelete(studentId)
        if(!deletedDoctor){
            throw new NotFoundException(`Student ${studentId} not found`)
        }
        return deletedDoctor
    }
}
