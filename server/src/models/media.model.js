// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const media = sequelizeClient.define('media', {
    link: {
      type: DataTypes.STRING,
    },
    caption: {
      type: DataTypes.STRING,
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
  media.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return media;
};
