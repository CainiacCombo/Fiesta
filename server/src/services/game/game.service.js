// Initializes the `game` service on path `/game`
const createService = require('feathers-sequelize');
const createModel = require('../../models/game.model');
const hooks = require('./game.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/game', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('game');

  service.on('start', async data => {
    const partyId = data.party_id;

    const userResponse = await app.service('group-users').find({
      query: {
        party_id: partyId
      }
    });

    const random = Math.floor(Math.random() * userResponse.data.length);
    
    const randomUser = userResponse.data[random];

    service.emit('chosen', {user: randomUser.user});

  });

  service.hooks(hooks);
};

