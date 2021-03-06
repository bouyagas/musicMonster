const db = require('../db/config');
const bcrypt = require('bcrypt');

const User = {};

User.findOne = (user) => {
  return db.oneOrNone(
    `SELECT * FROM users
      WHERE
      username = $/username/
      `,
      user);
};

User.saveNew = (user) => {
  return db.one(
    `INSERT INTO users (username, password)
      VALUES ($/username/, $/password/)
      RETURNING*`,
      user);
};

module.exports = User;
