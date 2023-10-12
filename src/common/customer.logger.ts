import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';

export class CustomLogger implements LoggerService {
  private readonly className;
  constructor(className) {
    this.className = className;
  }
  private logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
      winston.format.colorize({
        all: true,
        colors: {
          info: 'blue',
        },
      }),
    ),
    transports: [new winston.transports.Console()],
  });

  log(message: string) {
    this.logger.log('info', `[${this.className}] :: ${message}`);
  }

  error(message: string, trace: string) {
    this.logger.log('error', `[${this.className}] :: ${message}`, { trace });
  }

  warn(message: string) {
    this.logger.log('warn', `[${this.className}] :: ${message}`);
  }

  debug(message: string) {
    this.logger.log('debug', `[${this.className}] :: ${message}`);
  }

  verbose(message: string) {
    this.logger.log('verbose', message);
  }
}
