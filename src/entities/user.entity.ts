import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true, type: 'varchar' })
  email: string

  @Column({ type: 'text', default: null })
  password: string

  @Column({ default: true, type: 'boolean' })
  active: boolean

  @Column({ default: null, type: 'text' })
  phone: string

  @CreateDateColumn({ default: null, type: 'timestamptz', name: 'created_at' })
  createdAt: string
}
