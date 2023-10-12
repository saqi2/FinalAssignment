import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('task', { schema: 'public' })
export class Task {
    @PrimaryGeneratedColumn()
    taskId: number;

    @Column({ type: 'varchar', length: 30 })
    title: string;

    @Column({ type: 'varchar', length: 30 })
    description: string;

    @Column({ type: 'varchar', length: 30 })
    status: string;

    @CreateDateColumn() due_date: Date;

    @CreateDateColumn() created_at: Date;

    @CreateDateColumn() updated_at: Date;

}