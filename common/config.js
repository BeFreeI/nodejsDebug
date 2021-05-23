const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../.env')
});

module.exports = {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB: process.env.DB,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
  SECRET_KEY: process.env.SECRET_KEY
};
