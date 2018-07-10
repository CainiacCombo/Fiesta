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
        const getRandomUser = async (party_id, notId) => {
          let randomUser;
          do {
            const userResponse = await context.app.service('group-users').find({ query: { party_id } });
            const random = Math.floor(Math.random() * userResponse.total);
            randomUser = userResponse.data[random];
          } while (randomUser.id == notId);
          return randomUser;
        };

        const { id, name, party_id, match_it_id, hot_it_id } = context.result;
        const { state, action } = context.data;

        if (name === 'match') {
          if (state === 'starting') {
            const randomUser = await getRandomUser(party_id, match_it_id);

            context.result.match_it = randomUser;
            context.result.match_it_id = randomUser.user_id;
            await context.app.service('game').patch(id, { match_it_id: randomUser.user_id });
          }
        } else if (name === 'hot') {
          if (state === 'starting' || action === 'pass') {
            const randomUser = await getRandomUser(party_id, hot_it_id);

            context.result.hot_it = randomUser;
            context.result.hot_it_id = randomUser.user_id;
            context.result.state = 'started';
            await context.app.service('game').patch(id, { hot_it_id: randomUser.user_id });

            if (state === 'starting') {
              setTimeout(() => context.app.service('game').patch(id, { state: 'ended' }), 30000);
            }
          }
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
