const { authenticate } = require('@feathersjs/authentication').hooks;

const getGroupProfile = require('../../hooks/get-group-profile');
const getGroupUserProfile = require('../../hooks/get-group-user-profile');
const convertToBoolean = require('../../hooks/convert-to-boolean');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      getGroupProfile(),
      getGroupUserProfile(),
      convertToBoolean({ keys: ['is_host'], all: true }),
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
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
