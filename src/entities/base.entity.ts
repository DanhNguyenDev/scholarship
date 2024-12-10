import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BaseEntity as TypeOrmBaseEntity
} from 'typeorm'
export default abstract class BaseEntity extends TypeOrmBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date

  @DeleteDateColumn({ type: 'timestamptz', name: 'deleted_at', nullable: true })
  deletedAt: Date | null

  @Column({ type: 'uuid', name: 'created_by', nullable: true })
  createdBy: string | null

  @Column({ type: 'uuid', name: 'updated_by', nullable: true })
  updatedBy: string | null

  @Column({ type: 'uuid', name: 'deleted_by', nullable: true })
  deletedBy: string | null
}
