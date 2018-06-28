const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const catchFriendshipConflict = require('../../src/hooks/catch-friendship-conflict');

describe('\'catch-friendship-conflict\' hook', () => {
  let app;
  let user1_id;
  let user2_id;
  let friends;

  beforeEach(() => {
    app = feathers();
    user1_id = 1;
    user2_id = 2;
    friends = {
      total: 1,
      limit: 10,
      skip: 0,
      data: [{ user1_id, user2_id }],
    };

    app.use('friends', { find: () => friends });
    app.use('/dummy', { create() {} });

    app.service('dummy').hooks({
      before: catchFriendshipConflict()
    });
  });

  it('rejects when trying to create a friendship between two already friended users', async () => {
    assert.rejects(
      app.service('dummy').create({ user1_id, user2_id }),
      `A friendship has already been created between users "${user1_id}" and "${user2_id}"`
    );
  });
});
