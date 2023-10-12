import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, map } from "rxjs";
import { CustomLogger } from "src/common/customer.logger";

@Injectable()
export class ModuleBasedInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const logger = new CustomLogger(ModuleBasedInterceptor.name);
    logger.log("Module-Based Interceptor.");

    return next.handle().pipe(
      map((data) => {
        Object.assign(data, { moduleBasedInterceptor: "invoked" });
        return data;
      })
    );
  }
}
