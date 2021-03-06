const Sequelize = require("sequelize");
require("dotenv").config(); // this is important!
module.exports = {
    development: {
        username: process.env.DB_USER,
        password: ""
    database: "tips_db",
        host: process.env.DB_HOST,
        dialect: "mysql"
    },
    test: {
        username: process.env.DB_USER,
        password: ""
    database: "database_test",
        host: process.env.DB_HOST,
        dialect: "mysql"
    },
    production: {
        useEnvVariable: "JAWSDB_URL",
        dialect: "mysql"
    }
};
// module.exports = {
//   development: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: "passport_demo",
//     host: process.env.DB_HOST,
//     dialect: "mysql"
//   },
//   test: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: "database_test",
//     host: process.env.DB_HOST,
//     dialect: "mysql"
//   },
//   production: {
//     useEnvVariable: "JAWSDB_URL",
//     dialect: "mysql"
//   }
// };
