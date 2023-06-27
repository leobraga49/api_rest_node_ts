import { Knex } from 'knex';

export const development: Knex.Config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './src/server/database/knex/db.sqlite',
    },
    migrations: {
        directory: './src/server/database/knex/migrations',
    },
    seeds: {
        directory: './src/server/database/knex/seeds',
    },
    pool: {
        afterCreate: (conn: any, cb: Function) => {
            conn.run('PRAGMA foreign_keys = ON');
            cb();
        },
    },
};

export const test: Knex.Config = {
    ...development,
    connection: ':memory:',
};


export const production: Knex.Config = {};
