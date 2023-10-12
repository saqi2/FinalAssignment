import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';;
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    createUser(createUserDto): Promise<User> {
        const user: User = new User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.email = createUserDto.email;
        user.username = createUserDto.username;
        user.password = createUserDto.password;
        user.created_at = createUserDto.created_at;
        user.updated_at = createUserDto.updated_at
        return this.userRepository.save(user);
    }

    viewUser(userId: number): Promise<User> {
        return this.userRepository.findOneBy({ userId });
    }

    updateUser(id: number, updateUserDto): Promise<User> {
        const user: User = new User();
        user.firstName = updateUserDto.firstName;
        user.lastName = updateUserDto.lastName;
        user.email = updateUserDto.email;
        user.username = updateUserDto.username;
        user.password = updateUserDto.password;
        user.created_at = updateUserDto.created_at;
        user.updated_at = updateUserDto.updated_at
        user.userId = id;
        return this.userRepository.save(user);
    }
}
