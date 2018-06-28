const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const removeFriendRequest = require('../../src/hooks/remove-friend-request');

describe('\'remove-friend-request\' hook', () => {
  let app;
  let user1_id;
  let user2_id;

  beforeEach(() => {
    app = feathers();
    user1_id = 1;
    user2_id = 2;

    app.use('/dummy', { create: async () => {} });

    app.service('dummy').hooks({
      before: removeFriendRequest(),
    });
  });

  it('returns error when there was no friend request', async () => {
    app.use('/friend-requests', { find: async () => ({ total: 0 }), });

    assert.rejects(
      app.service('dummy').create({ user1_id, user2_id }),
      `Could not find a friend request between "${user1_id}" and "${user2_id}"`
    );
  });

  it('deletes a friend request', async () => {
    const friendRequestId = 12;
    let deletedFriendRequest;

    app.use('/friend-requests', {
      find: async () => ({ total: 1, data: [{ id: friendRequestId }] }),
      remove: async id => deletedFriendRequest = id,
    });

    await app.service('dummy').create({ user1_id, user2_id });

    assert.deepEqual(deletedFriendRequest, friendRequestId);
  });
});
