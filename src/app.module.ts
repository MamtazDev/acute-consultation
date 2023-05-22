import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorService } from './doctor/doctor.service';
import { DoctorController } from './doctor/doctor.controller';
import { DoctorSchema } from './schema/doctor.schema';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://mamtazfreelancer:f7FcczeDomuZ5F3L@cluster0.6ds5s8q.mongodb.net/`,{dbName:'doctorPortal'}),
    MongooseModule.forFeature([{name:'Doctor', schema:DoctorSchema}])
  ],
  controllers: [AppController, DoctorController],
  providers: [AppService, DoctorService],
})
export class AppModule {}
