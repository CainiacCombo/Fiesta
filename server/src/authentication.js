const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');

module.exports = function (app) {
  const { secret } = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication({ secret }));
  app.configure(jwt({ entity: 'users' }));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(['jwt'])
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  });
};
