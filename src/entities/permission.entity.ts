import { Column, Entity, OneToMany, Unique } from 'typeorm'
import BaseEntity from './base.entity'
import { RolePermission } from './rolePermission.entity'
@Entity({ name: 'permissions' })
@Unique('idx_unique_name', ['name'])
export class Permission extends BaseEntity {
  @Column({ unique: true, type: 'text' })
  name: string

  @OneToMany(() => RolePermission, (rolePermission) => rolePermission.permission)
  rolePermissions: RolePermission[]
}
