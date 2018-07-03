// Initializes the `party-ratings` service on path `/party-ratings`
const createService = require('feathers-sequelize');
const createModel = require('../../models/party-ratings.model');
const hooks = require('./party-ratings.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/party-ratings', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('party-ratings');

  service.hooks(hooks);
};
