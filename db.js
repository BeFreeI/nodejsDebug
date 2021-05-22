const { DB, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } = require('./common/config');
const Sequelize = require('sequelize');

console.log(DB_USER);

                                //database username   password
const sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    port: DB_PORT
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)

module.exports = sequelize;
