const { authenticate } = require('@feathersjs/authentication').hooks;

const uploadMatch = require('../../hooks/upload-match');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [uploadMatch()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [
      async context => {
        if (context.data.state === 'starting') {
          const party_id = context.result.party_id;
          const userResponse = await context.app.service('group-users').find({ query: { party_id } });
          const random = Math.floor(Math.random() * userResponse.total);
          const randomUser = userResponse.data[random];

          context.result.match_it = randomUser;
        }

        return context;
      },
    ],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
