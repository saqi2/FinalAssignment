import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CustomLogger } from "src/common/customer.logger";

@Injectable()
export class GlobalInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const logger = new CustomLogger(GlobalInterceptor.name);

    logger.log("Global Interceptor.");

    return next.handle().pipe(
      map((data) => {
        Object.assign(data, { globalInterceptor: "invoked" });
        return data;
      })
    );
  }
}
