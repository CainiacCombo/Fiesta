const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const getUserParties = require('../../src/hooks/get-user-parties');

describe('\'get-user-parties\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async find() {
        return { data: [] };
      },
    });

    app.service('dummy').hooks({
      after: getUserParties(),
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').find();

    assert.deepEqual(result, { data: [] });
  });
});
