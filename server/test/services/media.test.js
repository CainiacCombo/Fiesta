const assert = require('assert');
const app = require('../../src/app');

describe('\'media\' service', () => {
  it('registered the service', () => {
    const service = app.service('media');

    assert.ok(service, 'Registered the service');
  });
});
