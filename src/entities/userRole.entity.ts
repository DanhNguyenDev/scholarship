import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import BaseEntity from './base.entity'
import { User } from './user.entity'
import { Role } from './role.entity'
@Entity({ name: 'user_roles' })
export default class UserRole extends BaseEntity {
  @Column({ name: 'user_id', type: 'uuid', nullable: false })
  userId: string

  @Column({ name: 'role_id', type: 'uuid', nullable: false })
  roleId: string

  @ManyToOne(() => User, (user) => user.userRoles)
  @JoinColumn({ name: 'user_id' })
  user: User

  @ManyToOne(() => Role, (role) => role.userRoles)
  @JoinColumn({ name: 'role_id' })
  role: Role
}
