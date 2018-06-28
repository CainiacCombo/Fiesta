const { authenticate } = require('@feathersjs/authentication').hooks;

const getUserFriends = require('../../hooks/get-user-friends');

module.exports = {
  before: {
    all: [ authenticate(['jwt'])],
    find: [],
    get: [],
    create: [],
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
