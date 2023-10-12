import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('user', { schema: 'public' })
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ type: 'varchar', length: 30 })
    firstName: string;

    @Column({ type: 'varchar', length: 30 })
    lastName: string;

    @Column({ type: 'varchar', length: 30 })
    email: string;

    @Column({ type: 'varchar', length: 30 })
    username: string;

    @Column({ type: 'varchar' })
    password: string;

    @CreateDateColumn() created_at: Date;

    @CreateDateColumn() updated_at: Date;
}