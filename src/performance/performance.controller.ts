// src/performance/performance.controller.ts
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('performance')
@UseGuards(AuthGuard)
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  @Get()
  async getPerformance(@Query('campaignId') campaignId: string) {
    return this.performanceService.getCampaignPerformance(campaignId);
  }
}
