const assert = require('assert');
const app = require('../../src/app');

describe('\'parties\' service', () => {
  it('registered the service', () => {
    const service = app.service('parties');

    assert.ok(service, 'Registered the service');
  });
});
