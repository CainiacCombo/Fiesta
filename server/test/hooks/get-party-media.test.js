const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const getPartyMedia = require('../../src/hooks/get-party-media');

describe('\'get-party-media\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/media', {
      async find() {
        return { data: [] };
      },
    });

    app.use('/dummy', {
      async get() {
        return {};
      },
    });

    app.service('dummy').hooks({
      after: getPartyMedia()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get(1);

    assert.deepEqual(result.media, []);
  });
});
