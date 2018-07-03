// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const partyRatings = sequelizeClient.define('party_ratings', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    party_id: {
      type: DataTypes.UUID
    },
    user_id: {
      type: DataTypes.UUID
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  partyRatings.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return partyRatings;
};
