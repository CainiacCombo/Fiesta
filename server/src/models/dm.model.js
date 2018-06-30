module.exports = (app) => {
  const sequelizeClient = app.get('sequelizeClient');
  const dm = sequelizeClient.define('dm', {}, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  dm.associate = (models) => {
    dm.belongsToMany(models.users, { through: models.group_users, foreignKey: 'dm_id' });
    dm.belongsToMany(models.messages, { through: models.group_messages, foreignKey: 'dm_id' });
  };

  return dm;
};
