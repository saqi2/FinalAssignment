import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ModuleBasedMiddleware } from 'src/middlewares/module-based.middleware';
import { ModuleBasedInterceptor } from 'src/interceptors/module-based.interceptor';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ModuleBasedInterceptor,
    },],
  exports: [TaskService],
})
export class TaskModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ModuleBasedMiddleware).forRoutes('task/*');
  }
}
