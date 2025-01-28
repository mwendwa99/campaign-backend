// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    // In real application, validate credentials against database
    // This is a simplified example for testing
    const payload = {
      username: body.username,
      sub: '123', // Mock user ID
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
