import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dbdatasource as myTypeOrm } from './config/typeorm.config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { AppResolver } from './app.resolver'
@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(myTypeOrm),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gpl'),
      playground: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver]
})
export class AppModule {}
