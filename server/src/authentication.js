const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const oauth2 = require('@feathersjs/authentication-oauth2');
const { Strategy } = require('passport-google-oauth20');

module.exports = function (app) {
  const { secret, google } = app.get('authentication');
  console.log(Strategy.Strategy);
  // Set up authentication with the secret
  app.configure(authentication({ secret }));
  app.configure(jwt());

  app.configure(oauth2(Object.assign({
    name: 'google',
    Strategy: Strategy.Strategy,
    clientID: google.clientID,
    clientSecret: google.clientSecret,
    scope: ['profile'],
  })));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      // create: [
      //   authentication.hooks.authenticate(['jwt'])
      // ],
      // remove: [
      //   authentication.hooks.authenticate('jwt')
      // ]
      all: [
        authentication.hooks.authenticate(['jwt'])
      ]
    }
  });
};
