// src/schemas/submission.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubmissionDocument = Submission & Document;

@Schema({ timestamps: true })
export class Submission {
  @Prop({ required: true })
  influencerId: string;

  @Prop({ required: true })
  influencerName: string;

  @Prop({ required: true })
  campaignId: string;

  @Prop({ required: true })
  contentUrl: string;

  @Prop({
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  })
  status: string;

  @Prop({ default: Date.now })
  submissionDate: Date;

  @Prop({ default: 0 })
  engagementEstimate: number;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
