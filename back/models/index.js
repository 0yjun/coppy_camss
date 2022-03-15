const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};
console.log('config : ' + config);

const sequelize = new Sequelize(config.database, config.username, config.password, config);
console.log('sequelize is ', sequelize);
db.User = require('./user')(sequelize, Sequelize);
db.comnCdM = require('./comnCdM')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
