import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { Observable, map } from 'rxjs';
  import { CustomLogger } from 'src/common/customer.logger';
  
  @Injectable()
  export class ClassBasedInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const logger = new CustomLogger(ClassBasedInterceptor.name);
      logger.log('Class-Based Interceptor.');
  
      return next.handle().pipe(
        map((data) => {
          Object.assign(data, { classBasedInterceptor: 'invoked' });
          return data;
        }),
      );
    }
  }
  