import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddColumnCreatedAtUsers1712677258550 implements MigrationInterface {
  name = 'AddColumnCreatedAtUsers1712677258550'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "created_at" timestamptz default now()`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_at"`)
  }
}
