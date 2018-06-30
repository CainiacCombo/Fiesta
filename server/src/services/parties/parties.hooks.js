const { authenticate } = require('@feathersjs/authentication').hooks;

const textInvite = require('../../hooks/text-invite');
const convertToBoolean = require('../../hooks/convert-to-boolean');
const addUserHost = require('../../hooks/add-user-host');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [ textInvite() ],
    remove: []
  },

  after: {
    all: [],
    find: [ convertToBoolean({ keys: ['is_private'], all: true }) ],
    get: [],
    create: [ addUserHost() ],
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
