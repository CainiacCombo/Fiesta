// Initializes the `group_messages` service on path `/group-messages`
const createService = require('feathers-sequelize');
const createModel = require('../../models/group-messages.model');
const hooks = require('./group-messages.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/group-messages', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('group-messages');

  service.hooks(hooks);
};
