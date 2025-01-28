import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Submission } from '../schemas/submission.schema';

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectModel(Submission.name)
    private submissionModel: Model<Submission>,
  ) {}

  async findByCampaign(campaignId: string): Promise<Submission[]> {
    return this.submissionModel.find({ campaignId }).exec();
  }

  async updateStatus(
    id: string,
    status: 'approved' | 'rejected',
  ): Promise<Submission> {
    const submission = await this.submissionModel
      .findByIdAndUpdate(id, { status }, { new: true })
      .exec();

    if (!submission) {
      throw new NotFoundException(`Submission with ID ${id} not found`);
    }

    return submission;
  }
}
