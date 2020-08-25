require("dotenv").config(); // this is important!
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "tips_db",
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "tips_db",
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  production: {
    useEnvVariable: "JAWSDB_URL",
    dialect: "mysql",
  },
};

// passport_demo
