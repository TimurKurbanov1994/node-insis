const { Pool } = require('pg');

const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'db',
  password: '1',
  port: 5432,
};

const pool = new Pool(config);

const createTables = () => {
  const schoolTable = ` CREATE TABLE IF NOT EXISTS
  users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    age INT NOT NULL
  )`;
  pool.query(schoolTable).catch((error) => {
    throw new Error(error);
  });
};

const dropTable = () => {
  const schoolTable = 'DROP TABLE users';
  pool.query(schoolTable).catch((error) => {
    throw new Error(error);
  });
};

module.exports = {
  createTables,
  dropTable,
  pool,
};
