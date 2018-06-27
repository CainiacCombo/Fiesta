// Initializes the `friends` service on path `/friends`
const createService = require('feathers-sequelize');
const createModel = require('../../models/friends.model');
const hooks = require('./friends.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/friends', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('friends');

  service.hooks(hooks);
};
