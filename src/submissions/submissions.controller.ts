// src/submissions/submissions.controller.ts
import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  Query,
  UseGuards,
} from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { ApprovalDto } from './dto/approval.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('submissions')
@UseGuards(AuthGuard)
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Get()
  async getSubmissions(@Query('campaignId') campaignId: string) {
    return this.submissionsService.findByCampaign(campaignId);
  }

  @Patch(':id')
  async updateSubmissionStatus(
    @Param('id') id: string,
    @Body() updateDto: ApprovalDto,
  ) {
    return this.submissionsService.updateStatus(id, updateDto.status);
  }
}
