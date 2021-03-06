// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  Object.entries(context.params.query).forEach(([key, value]) => {
    if (value['$like']) {
      context.params.sequelize = context.params.sequelize || {};
      context.params.sequelize.where = context.params.sequelize.where || {};
      context.params.sequelize.where[key] = { $like: value['$like'] };
    }
  });

  return context;
};
