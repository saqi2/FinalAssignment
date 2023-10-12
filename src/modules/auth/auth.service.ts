import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CustomLogger } from '../../common/customer.logger';

@Injectable()
export class AuthService {
  logger = new CustomLogger(AuthService.name);

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async login(userId: number): Promise<any> {
    this.logger.log(`${this.login.name} invoked`);

    const user = await this.userService.viewUser(userId);
    return { jwt: this.jwtService.sign({ ...user }) };
  }
}
