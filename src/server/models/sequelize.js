const Sequelize = require('dynamo-sequelize').default;

const config = {
  dialect: 'postgres'
};

const sequelize = new Sequelize(
  process.env.DATABASE_CONNECTION_URI,
  config
);

exports.sequelize = sequelize;
