const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const getGroupProfile = require('../../src/hooks/get-group-profile');

describe('\'getGroupProfile\' hook', () => {
  let app;
  let parties;
  let groupUsers;

  beforeEach(() => {
    app = feathers();
    parties = {
      1: { id: 1, name: 'bob\'s party', },
      2: { id: 2, name: 'dylan\'s party' },
    };
    groupUsers = [
      { id: 1, user_id: 1, party_id: 1 },
      { id: 2, user_id: 2, party_id: 2 },
    ];

    app.use('/parties', { get: async id => parties[id] });
    app.use('/group-users', {
      find: async () => ({
        total: groupUsers.length,
        limit: 10,
        skip: 0,
        data: groupUsers,
      }),
    });

    app.service('group-users').hooks({
      after: getGroupProfile(),
    });
  });

  it('retreives all the user profiles for a party', async () => {
    const result = await app.service('group-users').find();
    const expected = {
      total: groupUsers.length,
      limit: 10,
      skip: 0,
      data: groupUsers.map((groupUser) => ({
        ...groupUser,
        party: parties[groupUser.party_id],
      })),
    };

    assert.deepEqual(result, expected);
  });
});
