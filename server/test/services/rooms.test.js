const assert = require('assert');
const app = require('../../src/app');

describe('\'rooms\' service', () => {
  it('registered the service', () => {
    const service = app.service('rooms');

    assert.ok(service, 'Registered the service');
  });
});
