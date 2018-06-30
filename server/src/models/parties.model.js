const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = (app) => {
  const sequelizeClient = app.get('sequelizeClient');
  const parties = sequelizeClient.define('parties', {
    start_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    is_private: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  parties.associate = (models) => {
    parties.belongsToMany(models.users, { through: models.group_users, foreignKey: 'party_id' });
    parties.belongsToMany(models.messages, { through: models.group_messages, foreignKey: 'party_id' });
  };

  return parties;
};
