import { UserService } from 'src/Entities/User/user.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    login(req: any): any;
    logout(): Promise<void>;
    getHello(req: any): string;
}
