const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_CONNECTION_URI,
  {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions:{
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
);

exports.sequelize = sequelize;
