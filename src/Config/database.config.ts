// import { registerAs } from '@nestjs/config';
// import { DataSourceOptions } from 'typeorm';
// import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
// import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
// import env from './env';

// const sqlite: SqliteConnectionOptions = {
//   type: 'sqlite',
//   database: 'mock.sqlite',
// }; //

// const mysql: MysqlConnectionOptions = {
//   type: 'mysql',
//   host: env('DB_HOST', 'localhost'),
//   port: env('DB_PORT', 3306),
//   database: env('DB_DATABASE', 'individual'),
//   username: env('DB_USER', 'root'),
//   password: env('DB_PASSWORD', 'root'),
//   logging: env('DB_LOGGING', false),
//   logger: env('DB_LOGGER', 'advanced-console'),
//   // charset: env('DB_CHARSET', 'utf8mb4_0900_ai_ci'),
//   timezone: env('DB_TIMEZONE'),
//   extra: {
//     connectionLimit: env('DB_CONNECTION_LIMIT', 5),
//   },
// };

// export const databaseConfig: DataSourceOptions =
//   process.env.DB_TYPE === 'sqlite' ? sqlite : mysql;

// export default registerAs<DataSourceOptions>('database', () => databaseConfig);
