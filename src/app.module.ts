// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmissionsModule } from './submissions/submissions.module';
import { AuthModule } from './auth/auth.module';
import { PerformanceModule } from './performance/performance.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    //@ts-ignore
    MongooseModule.forRoot(process.env.MONGODB_URI),
    SubmissionsModule,
    AuthModule,
    PerformanceModule,
  ],
})
export class AppModule {}
