import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/Guards/jwt.guard';
import { LoginGuard } from 'src/Guards/login.guard';
import { CreateUserDto } from './DTO/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Request() req): any {
    return req.user;
  }

  @UseGuards(JwtAuthGuard) //check for token in headers and works!
  @Get('protected')
  getHello(): Promise<any> {
    return this.userService.getUsers();
  }

  @Get()
  getAll(): Promise<any> {
    return this.userService.getUsers();
  }

  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }
}
//
