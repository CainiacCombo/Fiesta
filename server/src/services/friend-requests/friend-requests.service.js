// Initializes the `friend_requests` service on path `/friend-requests`
const createService = require('feathers-sequelize');
const createModel = require('../../models/friend-requests.model');
const hooks = require('./friend-requests.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/friend-requests', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('friend-requests');

  service.hooks(hooks);
};
