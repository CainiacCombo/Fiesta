const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = (app) => {
  const sequelizeClient = app.get('sequelizeClient');
  const dm = sequelizeClient.define('dm', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  dm.associate = (models) => {
    dm.belongsToMany(models.users, { through: models.group_users, foreignKey: 'dm_id', otherKey: 'user_id' });
    dm.belongsToMany(models.messages, { through: models.group_messages, foreignKey: 'dm_id', otherKey: 'message_id' });
  };

  return dm;
};
