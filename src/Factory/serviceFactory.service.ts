import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/Entities/User/user.service';

@Injectable()
export class ServiceFactory {
  constructor(
    @Inject(forwardRef(() => UserService))
    public readonly userService: UserService,
  ) {}
}
