import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('task', { schema: 'public' })
export class Task {
    @PrimaryGeneratedColumn()
    taskId: number;

    @Column({ type: 'varchar', length: 40 })
    title: string;

    @Column({ type: 'varchar', length: 40 })
    description: string;

    @Column({ type: 'varchar', length: 40 })
    status: string;

    @CreateDateColumn() due_date: Date;

    @CreateDateColumn() created_at: Date;

    @CreateDateColumn() updated_at: Date;

}