const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const getFriendRequestUsers = require('../../src/hooks/get-friend-request-users');

describe('\'get-friend-request-users\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      after: getFriendRequestUsers()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');

    assert.deepEqual(result, { id: 'test' });
  });
});
