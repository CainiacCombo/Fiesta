const assert = require('assert');
const app = require('../../src/app');

describe('\'dm\' service', () => {
  it('registered the service', () => {
    const service = app.service('dm');

    assert.ok(service, 'Registered the service');
  });
});
