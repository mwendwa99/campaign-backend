import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Performance } from '../schemas/performance.schema'; // Fixed typo in filename

@Injectable()
export class PerformanceService {
  constructor(
    @InjectModel(Performance.name)
    private performanceModel: Model<Performance>,
  ) {}

  async getCampaignPerformance(campaignId: string): Promise<Performance> {
    const performance = await this.performanceModel
      .findOne({ campaignId })
      .exec();

    if (!performance) {
      throw new NotFoundException(
        `Performance data for campaign ${campaignId} not found`,
      );
    }

    return performance;
  }
}
