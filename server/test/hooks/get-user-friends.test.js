const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const getUserFriends = require('../../src/hooks/get-user-friends');

describe('\'get-user-friends\' hook', () => {
  let app;
  let users;
  let userFriends;
  let user1Friends;
  let user2Friends;

  beforeEach(() => {
    app = feathers();
    users = {
      1: { id: 1, username: 'bob' },
      2: { id: 2, username: 'taylor' },
    };
    userFriends = {
      total: 1,
      limit: 10,
      skip: 0,
      data: [{ user1_id: 1, user2_id: 2 }],
    };
    user1Friends = { ...userFriends, data: [users[2]] };
    user2Friends = { ...userFriends, data: [users[1]] };

    app.use('/users', { get: async id => users[id] });
    app.use('/friends', { find: async () => userFriends });
    app.use('/dummy', { find: () => Promise.reject(new Error('"user_id" not in users fieldlist')) });

    app.service('dummy').hooks({
      error: getUserFriends(),
    });
  });

  it('returns the friends for a user1', async () => {
    const user1 = await app.service('dummy').find({ query: { user_id: 1 } });

    assert.deepEqual(user1, user1Friends);
  });

  it('returns the friends for a user2', async () => {
    const user2 = await app.service('dummy').find({ query: { user_id: 2 } });

    assert.deepEqual(user2, user2Friends);
  });
});
