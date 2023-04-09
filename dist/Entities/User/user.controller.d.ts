import { CreateUserDto } from './DTO/createUser.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(req: any): any;
    getHello(): Promise<any>;
    getAll(): Promise<any>;
    registerUser(createUserDto: CreateUserDto): void;
}
