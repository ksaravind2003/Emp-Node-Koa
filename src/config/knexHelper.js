import "dotenv/config";
import Knex from 'knex';

const options = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  log: {
    warn(message) {
      console.log(`Warning: ${message}`);
    },
    error(message) {
      console.log(`Error: ${message}`);
    },
    deprecate(message) {
      console.log(`Deprecated: ${message}`);
    },
    debug(message) {
      console.log(`Debug: ${message}`);
    },
  },
};

const knex = new Knex(options);
export default knex;
