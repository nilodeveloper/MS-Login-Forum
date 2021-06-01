import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1622505238555 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "task",
                columns: [
                {
                    name: "id",
                    type: "number",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar(200)"
                },
                {
                    name: "description",
                    type: "varchar(200)"
                },
                {
                    name: "status",
                    type: "boolean"
                }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("task");
    }

}
