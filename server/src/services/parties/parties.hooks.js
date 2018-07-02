const { authenticate } = require('@feathersjs/authentication').hooks;

const addSequelizeLike = require('../../hooks/add-sequelize-like');
const textInvite = require('../../hooks/text-invite');
const convertToBoolean = require('../../hooks/convert-to-boolean');
const getPartyUsersCount = require('../../hooks/get-party-users-count');
const addUserHost = require('../../hooks/add-user-host');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [ addSequelizeLike() ],
    get: [],
    create: [],
    update: [],
    patch: [ textInvite() ],
    remove: []
  },

  after: {
    all: [],
    find: [
      convertToBoolean({ keys: ['is_private'], all: true }),
      getPartyUsersCount()
    ],
    get: [ getPartyUsersCount() ],
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
