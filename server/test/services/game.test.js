const assert = require('assert');
const app = require('../../src/app');

describe('\'game\' service', () => {
  it('registered the service', () => {
    const service = app.service('game');

    assert.ok(service, 'Registered the service');
  });
});
