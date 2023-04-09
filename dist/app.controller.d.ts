import { AuthService } from './Authentication/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
        payload: {
            email: any;
            name: any;
            sub: any;
        };
    }>;
    getProfile(req: any): any;
}
