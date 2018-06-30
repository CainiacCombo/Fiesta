const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const upload = require('../../src/hooks/upload');

describe('\'upload\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async create(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: upload()
    });
  });

  xit('runs the hook', async () => {
    const result = await app.service('dummy').create({});
    
    assert.deepEqual(result, { id: 'test' });
  });
});
