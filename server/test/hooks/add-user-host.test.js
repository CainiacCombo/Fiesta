const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const addUserHost = require('../../src/hooks/add-user-host');

describe('\'add-user-host\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/group-users', {
      async create() {
        return {};
      }
    });

    app.use('/dummy', {
      async create() {
        return {};
      }
    });

    app.service('dummy').hooks({
      after: addUserHost()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').create({});

    assert.deepEqual(result, {});
  });
});
