import BaseEntity from './base.entity'
import { Role } from './role.entity'
import { Permission } from './permission.entity'
import { Column, Entity, JoinColumn, JoinTable, ManyToOne } from 'typeorm'
@Entity({ name: 'role_permissions' })
export class RolePermission extends BaseEntity {
  @Column({ name: 'role_id', type: 'uuid' })
  roleId: string

  @Column({ name: 'permission_id', type: 'uuid' })
  permissionId: string

  @ManyToOne(() => Role, (role) => role.rolePermissions)
  @JoinColumn({ name: 'role_id' })
  role: Role

  @ManyToOne(() => Permission, (permission) => permission.rolePermissions)
  @JoinColumn({ name: 'permission_id' })
  permission: Permission
}
