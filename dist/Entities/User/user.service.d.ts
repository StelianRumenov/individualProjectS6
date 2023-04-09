import { Repository } from 'typeorm';
import { CreateUserDto } from './DTO/createUser.dto';
import { UserEntity } from './user.entity';
export type MyRequest = {
    email: string;
    password: string;
};
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    getUsers(): Promise<UserEntity[]>;
    createUser(userDetails: CreateUserDto): Promise<any>;
    signUp(user: any): void;
    getUserByEmail(email: string): Promise<any>;
}
