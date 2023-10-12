import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { CustomLogger } from 'src/common/customer.logger';

@Injectable()
export class ModuleBasedMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const logger = new CustomLogger(ModuleBasedMiddleware.name);
    logger.log('Module-based Middleware.');
    next();
  }
}
