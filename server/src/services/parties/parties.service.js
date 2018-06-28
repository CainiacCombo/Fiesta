// Initializes the `parties` service on path `/parties`
const createService = require('feathers-sequelize');
const createModel = require('../../models/parties.model');
const hooks = require('./parties.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/parties', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('parties');

  service.hooks(hooks);
};
