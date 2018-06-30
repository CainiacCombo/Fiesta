const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const convertToBoolean = require('../../src/hooks/convert-to-boolean');

describe('\'convert-to-boolean\' hook', () => {
  let app;
  let data;
  let expectedData;

  beforeEach(() => {
    app = feathers();
    data = [
      { testKey: 1 },
      { testKey: 0 },
      { testKey: 1 },
    ];
    expectedData = data.map(obj => ({ testKey: obj.testKey === 1 ? true : false }));

    app.use('/dummy', {
      get: async () => ({ testKey: 1 }),
      find: async () => ({ data }),
    });
  });

  it('replaces a get 1/0 with a boolean', async () => {
    app.service('dummy').hooks({
      after: convertToBoolean({ keys: ['testKey'] }),
    });

    const result = await app.service('dummy').get(1);
    const expected = { testKey: true };

    assert.deepEqual(result, expected);
  });

  it('replaces each object in a find ', async () => {
    app.service('dummy').hooks({
      after: convertToBoolean({ keys: ['testKey'], all: true }),
    });

    const result = await app.service('dummy').find({});
    const expected = { data: expectedData };

    assert.deepEqual(result, expected);
  });
});
