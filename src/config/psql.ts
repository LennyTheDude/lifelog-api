import { Pool, QueryResult } from 'pg';
import config from './config';

const params = {
    user: config.psql.user,
    password: config.psql.password,
    host: config.psql.host,
    port: 5432,
    database: config.psql.database
};

const Connect = new Pool(params);

function Query(sql: string, values?: any[]): Promise<QueryResult> {
    return Connect.query(sql, values);
};

export { Connect, Query };