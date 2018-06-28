const { authenticate } = require('@feathersjs/authentication').hooks;

const getUserFriends = require('../../hooks/get-user-friends');
const catchFriendshipConflict = require('../../hooks/catch-friendship-conflict');
const removeFriendRequest = require('../../hooks/remove-friend-request');

module.exports = {
  before: {
    all: [ authenticate(['jwt'])],
    find: [],
    get: [],
    create: [ catchFriendshipConflict(), removeFriendRequest() ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [ getUserFriends() ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
