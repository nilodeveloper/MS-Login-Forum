import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserTable1623529856187 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table({
                    name: "user",
                    columns: [
                    {
                        name: "id",
                        type: "number",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar(200)"
                    },
                    {
                        name: "email",
                        type: "varchar(200)"
                    },
                    {
                        name: "type",
                        type: "number"
                    }
                    ]
                })
            );
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
