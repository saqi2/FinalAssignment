import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { CustomLogger } from 'src/common/customer.logger';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const logger = new CustomLogger(JwtAuthGuard.name);
    logger.log('JwtAuthGuard Guard');

    const headers = context.switchToHttp().getRequest().headers;
    const jwtToken = headers.authorization;
    if (!jwtToken) {
      return false;
    }

    try {
      const valid = this.jwtService.verify(jwtToken);
      if (valid) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}
