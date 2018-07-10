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
        const getRandomUser = async (party_id) => {
          const userResponse = await context.app.service('group-users').find({ query: { party_id } });
          const random = Math.floor(Math.random() * userResponse.total);
          const randomUser = userResponse.data[random];

          return randomUser;
        };

        if (context.data.state === 'starting') {
          if(context.result.name === 'match'){
            const { id, party_id } = context.result;
            const randomUser = await getRandomUser(party_id);

            context.result.match_it = randomUser;
            await context.app.service('game').patch(id, { match_it_id: randomUser.user_id });
          } else if (context.result.name === 'hot') {
            const { id, party_id } = context.result;
            const randomUser = await getRandomUser(party_id);

            context.result.hot_it = randomUser;
            await context.app.service('game').patch(id, { hot_it_id: randomUser.user_id });
            setTimeout(() => context.app.service('game').patch(id, { state: 'ended' }), 30000);
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
