// Initializes the `rooms` service on path `/rooms`
const createService = require('feathers-sequelize');
const createModel = require('../../models/rooms.model');
const hooks = require('./rooms.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rooms', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('rooms');

  service.hooks(hooks);
};
