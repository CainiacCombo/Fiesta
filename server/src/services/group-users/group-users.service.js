// Initializes the `group_users` service on path `/group-users`
const createService = require('feathers-sequelize');
const createModel = require('../../models/group-users.model');
const hooks = require('./group-users.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/group-users', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('group-users');

  service.hooks(hooks);
};
