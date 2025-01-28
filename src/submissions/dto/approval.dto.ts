// src/submissions/dto/approval.dto.ts
import { IsEnum } from 'class-validator';

export class ApprovalDto {
  @IsEnum(['approved', 'rejected'], {
    message: 'Status must be either "approved" or "rejected"',
  })
  status: 'approved' | 'rejected';
}
