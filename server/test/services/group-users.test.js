const assert = require('assert');
const app = require('../../src/app');

describe('\'group_users\' service', () => {
  it('registered the service', () => {
    const service = app.service('group-users');

    assert.ok(service, 'Registered the service');
  });
});
