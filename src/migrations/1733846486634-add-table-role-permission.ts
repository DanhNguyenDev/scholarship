import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTableRolePermission1733846486634 implements MigrationInterface {
    name = 'AddTableRolePermission1733846486634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role_permissions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid, "updated_by" uuid, "deleted_by" uuid, "role_id" uuid NOT NULL, "permission_id" uuid NOT NULL, CONSTRAINT "PK_84059017c90bfcb701b8fa42297" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "role_permissions"`);
    }

}
