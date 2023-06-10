const Sequelize = require("sequelize");
const sequelizeConnection = new Sequelize(
    'pesilatxaws',
    'root',
    '',
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
);
const book = require("./book.model.js")(sequelizeConnection,Sequelize);
const db = {};
db.Sequelize = Sequelize; // property dependency
db.sequelizeConnection = sequelizeConnection; //property squilize connection
db.book = book; // property models
module.exports = db;