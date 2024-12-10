import { Entity, Column, Unique, OneToMany, ManyToMany, JoinTable } from 'typeorm'
import BaseEntity from './base.entity'
import { Role } from './role.entity'
import { join } from 'path'
import UserRole from './userRole.entity'
@Entity('users', { name: 'users' })
@Unique('idx_unique_email', ['email'])
export class User extends BaseEntity {
  @Column({ unique: true, type: 'varchar', length: 50 })
  email: string

  @Column({ type: 'text', default: null })
  password: string | null

  @Column({ default: false, type: 'boolean' })
  active: boolean

  @Column({ default: null, type: 'text' })
  phone: string

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles: UserRole[]
}
