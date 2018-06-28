const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const getFriendRequestUsers = require('../../src/hooks/get-friend-request-users');

describe('\'get-friend-request-users\' hook', () => {
  let app;
  let users;
  let userFriendRequests;
  let user1FromFriendRequests;
  let user2ToFriendRequests;

  beforeEach(() => {
    app = feathers();
    users = {
      1: { id: 1, username: 'bob' },
      2: { id: 2, username: 'taylor' },
    };
    userFriendRequests = {
      total: 1,
      limit: 10,
      skip: 0,
      data: [{ from_user_id: 1, to_user_id: 2 }],
    };
    user1FromFriendRequests = {
      ...userFriendRequests, data: [{
        from_user_id: 1,
        to_user_id: 2,
        to: users[2],
      }],
    };
    user2ToFriendRequests = {
      ...userFriendRequests, data: [{
        from_user_id: 1,
        to_user_id: 2,
        from: users[1],
      }],
    };

    app.use('/users', { get: async id => users[id] });
    app.use('/dummy', { find: async () => userFriendRequests });

    app.service('dummy').hooks({
      after: getFriendRequestUsers()
    });
  });

  it('returns all the friend requests send by a user', async () => {
    const result = await app.service('dummy').find({ query: { from_user_id: 1 } });

    assert.deepEqual(result, user1FromFriendRequests);
  });

  it('returns all the friend requests sent for a user', async () => {
    const result = await app.service('dummy').find({ query: { to_user_id: 2 } });

    assert.deepEqual(result, user2ToFriendRequests);
  });
});
