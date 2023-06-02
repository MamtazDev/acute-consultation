import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorService } from './doctor/doctor.service';
import { DoctorController } from './doctor/doctor.controller';
import { DoctorSchema } from './schema/doctor.schema';
import { UserService } from './user/user.service';
import { UserSchema } from './schema/user.schema';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://mamtazfreelancer:f7FcczeDomuZ5F3L@cluster0.6ds5s8q.mongodb.net/`,{dbName:'doctorPortal'}),
    // MongooseModule.forRoot(`mongodb://localhost:27017`,{dbName:'doctorPortal'}),
    MongooseModule.forFeature([{name:'Doctor', schema:DoctorSchema},
    { name: 'User', schema: UserSchema }])
  ],
  controllers: [AppController, DoctorController, UserController],
  providers: [AppService, DoctorService, UserService],
})
export class AppModule {}
