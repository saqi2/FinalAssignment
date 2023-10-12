import {
  Body,
  Controller,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiKeyGuard } from 'src/guards/api-key.guard';
import { CustomLogger } from 'src/common/customer.logger';

@Controller('auth')
export class AuthController {
  logger = new CustomLogger(Controller.name);

  constructor(readonly authService: AuthService) { }

  @UseGuards(ApiKeyGuard)
  @Post('/login')
  login(@Body('userId', ParseIntPipe) userId: number): any {
    this.logger.log(`${this.login.name} invoked`);

    return this.authService.login(userId);
  }
}
