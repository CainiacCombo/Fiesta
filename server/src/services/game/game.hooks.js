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
        if(context.data.name === 'match'){
          if (context.data.state === 'starting') {
            const { id, party_id } = context.result;
            const userResponse = await context.app.service('group-users').find({ query: { party_id } });
            const random = Math.floor(Math.random() * userResponse.total);
            const randomUser = userResponse.data[random];
            
            context.result.match_it = randomUser;
            await context.app.service('game').patch(id, { match_it_id: randomUser.user_id });
          }
        }

        if(context.data.name === 'hot') {
          if(context.data.state === 'starting') {
            const { id, party_id } = context.result;
            const userResponse = await context.app.service('group-users').find({
              query: {
                party_id
              }
            });
            const random = Math.floor(Math.random() * userResponse.total);
            const randomUser = userResponse.data[random];

            context.result.hot_it = randomUser;
            await context.app.service('game').patch(id, { hot_it_id: random.user_id })
              .then(response => {
                setTimeout(() => {
                  `Hot Tater lands on you ${response}`;
                }, 30000);
              });
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
