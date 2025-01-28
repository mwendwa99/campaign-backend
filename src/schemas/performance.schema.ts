// src/schemas/performance.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PerformanceDocument = Performance & Document;

@Schema({ timestamps: true })
export class Performance {
  @Prop({ required: true })
  campaignId: string;

  @Prop({ type: Map, of: Number })
  postsPerDay: Record<string, number>;

  @Prop({ default: 0 })
  totalEarnings: number;

  @Prop({ default: 0 })
  totalEngagement: number;
}

export const PerformanceSchema = SchemaFactory.createForClass(Performance);
