import { Pool } from 'pg';
import config from './config';

const params = {
    user: config.psql.user,
    password: config.psql.password,
    host: config.psql.host,
    port: 5432,
    database: config.psql.database
};

const Connect = new Pool(params);

const Query = (query: string) => {
    Connect.query(query, (error, result) => {
        if (error) {
            console.error('Postgres: Error executing query', error.stack);
            return error;
        } else {
            console.log('Postgres: Query result:', result.rows);
            return result;
        }
    });
};

export { Connect, Query };