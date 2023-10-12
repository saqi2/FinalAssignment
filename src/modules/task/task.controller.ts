import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UnauthorizedException,
  UseFilters,
  UseGuards,
  UseInterceptors,
  Patch,
  Delete
} from '@nestjs/common';
import { ClassBasedInterceptor } from 'src/interceptors/class-based.interceptor';
import { ExectionFilters } from 'src/filters/exception.filter';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { CustomLogger } from 'src/common/customer.logger';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  readonly logger = new CustomLogger(Controller.name);
  constructor(private readonly taskService: TaskService) { }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Post()
  createTask(@Body() createTaskDto) {
    this.logger.log(`${this.createTask.name} invoked`);

    try {
      return this.taskService.createTask(createTaskDto);
    } catch (error) {
      throw new UnauthorizedException('An unexpected exception occured');
    }
  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getTaskById(@Param('id') id: string) {
    this.logger.log(`${this.getTaskById.name} invoked`);

    try {
      return this.taskService.getTaskById(+id);
    } catch (error) {
      throw new UnauthorizedException('An unexpected exception occured');
    }

  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto) {
    this.logger.log(`${this.updateTask.name} invoked`);

    try {
      return this.taskService.updateTask(+id, updateTaskDto);
    } catch (error) {
      throw new UnauthorizedException('An unexpected exception occured');
    }

  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Get()
  getTasks(): any {
    this.logger.log(`${this.getTasks.name} invoked`);

    try {
      return this.taskService.getAllTasks();
    } catch (error) {
      throw new UnauthorizedException('An unexpected exception occured');
    }
  }

  @Delete(':id')
  removeTask(@Param('id') id: string) {
    this.logger.log(`${this.removeTask.name} invoked`);

    try {
      return this.taskService.removeTask(+id);
    } catch (error) {
      throw new UnauthorizedException('An unexpected exception occured');
    }
  }

}