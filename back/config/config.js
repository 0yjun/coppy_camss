const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'coppy_camss',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      underscoded: true,
      underscoredAll: true,
    },
  },
  // test: {
  //   username: 'root',
  //   password: 'asdf4019',
  //   database: 'react_nodebird',
  //   host: '127.0.0.1',
  //   dialect: 'mysql',
  // },
  // production: {
  //   username: 'root',
  //   password: 'asdf4019',
  //   database: 'react_nodebird',
  //   host: '127.0.0.1',
  //   dialect: 'mysql',
  // },
};
