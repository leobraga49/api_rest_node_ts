import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.cities, table => {
            table.bigIncrements('id').primary().index();
            table.string('name', 150).index().notNullable();
            table.comment('Name of all cities');
        })
        .then(() => {
            console.log(`Table ${ETableNames.cities} has been created.`);
        });
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTableIfExists(ETableNames.cities)
        .then(() => {
            console.log(`Table ${ETableNames.cities} has been deleted.`);
        });
}

