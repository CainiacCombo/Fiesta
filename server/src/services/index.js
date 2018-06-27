const users = require('./users/users.service.js');
const friends = require('./friends/friends.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(friends);
};
