const assert = require('assert');
const app = require('../../src/app');

describe('\'party-ratings\' service', () => {
  it('registered the service', () => {
    const service = app.service('party-ratings');

    assert.ok(service, 'Registered the service');
  });
});
