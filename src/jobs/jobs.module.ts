import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { JobSchema, Job } from './schemas/job.schema';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])
  ],
  controllers: [JobsController],
  providers: [JobsService]
})
export class JobsModule {}
