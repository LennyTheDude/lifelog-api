import dotenv from 'dotenv';

dotenv.config();

const PSQL_HOST = process.env.PSQL_HOST || "localhost";
const PSQL_USER = process.env.PSQL_USER || "postgres";
const PSQL_DATABASE = process.env.PSQL_DATABASE || "lifelog";
const PSQL_PASSWORD = process.env.PSQL_PASSWORD || "";

const PSQL = {
    host: PSQL_HOST,
    user: PSQL_USER,
    database: PSQL_DATABASE,
    password: PSQL_PASSWORD,
}

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 3600;
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || "DARPA";
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || "wedidnotbecomefacebook";

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    token: {
        expireTime: SERVER_TOKEN_EXPIRETIME,
        issuer: SERVER_TOKEN_ISSUER,
        secret: SERVER_TOKEN_SECRET
    }
};

const config = {
    psql: PSQL,
    server: SERVER
};

export default config;