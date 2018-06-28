const users = require('./users/users.service.js');
const friends = require('./friends/friends.service.js');
const parties = require('./parties/parties.service.js');
const messages = require('./messages/messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(friends);
  app.configure(parties);
  app.configure(messages);
};
