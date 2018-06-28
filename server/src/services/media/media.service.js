// Initializes the `media` service on path `/media`
const createService = require('feathers-sequelize');
const createModel = require('../../models/media.model');
const hooks = require('./media.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/media', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('media');

  service.hooks(hooks);
};
