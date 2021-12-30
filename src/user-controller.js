const { pool } = require('./db');

const getUsers = async (req, res) => {
  if (req.params.id) {
    await pool.query(
      `SELECT * FROM users WHERE id = ${req.params.id} ORDER BY id ASC`,
      (error, results) => {
        if (error) {
          throw new Error(error);
        }
        res.send(results.rows[0]);
      },
    );
  } else {
    await pool.query(
      'SELECT * FROM users ORDER BY id ASC',
      (error, results) => {
        if (error) {
          throw new Error(error);
        }
        res.send(results.rows);
      },
    );
  }
};

const createUser = async (req, res) => {
  const { name, age } = req.body;
  await pool.query(
    'INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *',
    [name, age],
    (error, results) => {
      if (error) {
        throw new Error(error);
      } else if (!Array.isArray(results.rows) || results.rows.length < 1) {
        throw error;
      }
      res.send(results.rows[0]);
    },
  );
};

const putUser = async (req, res) => {
  const { name, age, id } = req.body;
  await pool.query(
    'UPDATE users SET name = $1, age = $2 WHERE id = $3  RETURNING *',
    [name, age, id],
    (error, results) => {
      if (error) {
        throw new Error(error);
      } else if (!Array.isArray(results.rows) || results.rows.length < 1) {
        throw error;
      }
      res.send(results.rows[0]);
    },
  );
};

const deleteUser = async (req, res) => {
  await pool.query(
    'DELETE FROM users WHERE id = $1  RETURNING *',
    [req.params.id],
    (error, results) => {
      if (error) {
        throw new Error(error);
      } else if (!Array.isArray(results.rows) || results.rows.length < 1) {
        throw error;
      }
      res.send({ deleted: results.rows[0] });
    },
  );
};

module.exports = {
  getUsers,
  createUser,
  putUser,
  deleteUser,
};
