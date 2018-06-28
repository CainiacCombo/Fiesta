// Initializes the `dm` service on path `/dm`
const createService = require('feathers-sequelize');
const createModel = require('../../models/dm.model');
const hooks = require('./dm.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/dm', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('dm');

  service.hooks(hooks);
};
