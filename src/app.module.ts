import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './modules/auth/auth.module';
import { CustomLogger } from './common/customer.logger';
import { TaskModule } from './modules/task/task.module';
import { User } from './modules/user/entities/user.entity';
import { Task } from './modules/task/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 4001,
      username: 'postgres',
      password: 'pass',
      database: 'postgres',
      entities: [User, Task],
    }),
    JwtModule.register({
      secret: 'jwtToken',
      signOptions: {
        expiresIn: '1h',
      },
      global: true,
    }),
    AuthModule,
    UserModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomLogger],
})
export class AppModule { }
