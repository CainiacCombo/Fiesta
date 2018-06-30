const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const getGroupUserProfile = require('../../src/hooks/get-group-user-profile');

describe('\'get-group-user-profile\' hook', () => {
  let app;
  let users;
  let groupUsers;

  beforeEach(() => {
    app = feathers();
    users = {
      1: { id: 1, username: 'bob', },
      2: { id: 2, username: 'dylan' },
    };
    groupUsers = [
      { id: 1, user_id: 1, party_id: 1 },
      { id: 2, user_id: 2, party_id: 2 },
    ];

    app.use('/users', { get: async id => users[id] });
    app.use('/group-users', {
      find: async () => ({
        total: groupUsers.length,
        limit: 10,
        skip: 0,
        data: groupUsers,
      }),
    });

    app.service('group-users').hooks({
      after: getGroupUserProfile()
    });
  });

  it('retreives the party profile', async () => {
    const result = await app.service('group-users').find();
    const expected = {
      total: groupUsers.length,
      limit: 10,
      skip: 0,
      data: groupUsers.map((groupUser) => ({
        ...groupUser,
        user: users[groupUser.user_id],
      })),
    };

    assert.deepEqual(result, expected);
  });
});
