const assert = require('assert');
const app = require('../../src/app');

describe('\'friend_requests\' service', () => {
  it('registered the service', () => {
    const service = app.service('friend-requests');

    assert.ok(service, 'Registered the service');
  });
});
