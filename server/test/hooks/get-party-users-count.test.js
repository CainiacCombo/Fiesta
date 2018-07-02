const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const getPartyUsersCount = require('../../src/hooks/get-party-users-count');

describe('\'get-party-users-count\' hook', () => {
  let app;
  let total;

  beforeEach(() => {
    app = feathers();
    total = 4;

    app.use('/group-users', { find: async () => ({ total, data: [] }) });
    app.use('/parties', {
      find: async () => ({ data: [{}, {}, {}, {}] }),
      get: async id => ({ id })
    });

    app.service('parties').hooks({
      after: getPartyUsersCount(),
    });
  });

  it('adds user_count to party on get', async () => {
    const id = 1;
    const result = await app.service('parties').get(id);

    assert.deepEqual(result, { id, user_count: total });
  });

  it('adds user_count to party on find', async () => {
    const result = await app.service('parties').find({});

    result.data.forEach(party => assert.ok(party.user_count));
  });
});
