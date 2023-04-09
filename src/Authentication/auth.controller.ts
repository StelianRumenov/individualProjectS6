import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from 'src/Entities/User/user.service';
import { LoginGuard } from 'src/Guards/login.guard';
import { ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService, // private config: ConfigService,
  ) {}

  @UseGuards(LoginGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @Post('/logout')
  logout() {
    return this.authService.logout();
  }

  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
