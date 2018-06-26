const assert = require('assert');
const app = require('../../src/app');

describe('\'auth\' service', () => {
  it('registered the service', () => {
    const service = app.service('auth');

    assert.ok(service, 'Registered the service');
  });
});
