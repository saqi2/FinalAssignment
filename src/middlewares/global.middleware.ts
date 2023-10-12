import { Request, Response, NextFunction } from 'express';
import { CustomLogger } from 'src/common/customer.logger';

export function GlobalMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const logger = new CustomLogger(GlobalMiddleware.name);
  logger.log('Global Middleware.');

  next();
}
