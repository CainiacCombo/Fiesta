const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const textInvite = require('../../src/hooks/text-invite');

describe('\'text-invite\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async create() {
        return {};
      }
    });

    app.service('dummy').hooks({
      before: textInvite()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').create({});

    assert.deepEqual(result, {});
  });
});
