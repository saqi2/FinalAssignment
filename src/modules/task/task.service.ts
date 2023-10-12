import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity'

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) { }

  createTask(createTaskDto): Promise<Task> {
    const task: Task = new Task();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description;
    task.status = createTaskDto.status;
    task.due_date = createTaskDto.due_date;
    task.created_at = createTaskDto.created_at;
    task.updated_at = createTaskDto.updated_at;
    return this.taskRepository.save(task);
  }

  getAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  getTaskById(taskId: number): Promise<Task> {
    return this.taskRepository.findOneBy({ taskId });
  }

  updateTask(id: number, updateTaskDto): Promise<Task> {
    const task: Task = new Task();
    task.title = updateTaskDto.title;
    task.description = updateTaskDto.description;
    task.status = updateTaskDto.status;
    task.due_date = updateTaskDto.due_date;
    task.created_at = updateTaskDto.created_at;
    task.updated_at = updateTaskDto.updated_at;
    task.taskId = id;
    return this.taskRepository.save(task);
  }

  removeTask(id: number): Promise<{ affected?: number }> {
    return this.taskRepository.delete(id);
  }
}
