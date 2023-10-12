import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CustomLogger } from 'src/common/customer.logger';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const logger = new CustomLogger(ApiKeyGuard.name);
    logger.log('ApiKeyGuard Guard');

    const request = context.switchToHttp().getRequest();
    const apiKey = request?.headers['x-api-key'];

    return apiKey === 'SuperSecretAPIKey' ? true : false;
  }
}
