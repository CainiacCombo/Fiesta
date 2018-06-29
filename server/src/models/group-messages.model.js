// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const groupMessages = sequelizeClient.define('group_messages', {
    message_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    dm_id: {
      type: DataTypes.UUID,
    },
    party_id: {
      type: DataTypes.UUID,
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  groupMessages.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    // group_messages.belongsTo(models.parties); 
  };

  return groupMessages;
};
