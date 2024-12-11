import { DataSource, DataSourceOptions } from 'typeorm'
export const dbdatasource: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 15432,
  username: 'postgres',
  password: 'Password123',
  // Database name
  database: 'template',
  // Synchronize database schema with entities
  synchronize: false,
  useUTC: true,
  // TypeORM Entity
  entities: ['dist/entities/*.entity.js'],
  // Your Migration path
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  logging: false
}

const dataSource = new DataSource(dbdatasource)
export default dataSource
