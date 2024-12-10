import { Column, Entity, JoinTable, ManyToOne, OneToMany, Unique } from 'typeorm'
import BaseEntity from './base.entity'
import UserRole from './userRole.entity'
import { RolePermission } from './rolePermission.entity'
@Entity({ name: 'roles' })
@Unique('idx_unique_name', ['name'])
export class Role extends BaseEntity {
  @Column({ unique: true, type: 'varchar', length: 50 })
  name: string

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRoles: UserRole[]

  @OneToMany(() => RolePermission, (rolePermission) => rolePermission.role)
  rolePermissions: RolePermission[]
}
