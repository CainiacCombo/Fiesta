const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const createGroupMessage = require('../../src/hooks/create-group-message');

describe('\'create-group-message\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/group-messages', {
      async create(newGroupMessage) {
        return newGroupMessage;
      }
    });
    app.use('/dummy', {
      async create(newDummy) {
        return { ...newDummy, message_id: 3 };
      }
    });

    app.service('dummy').hooks({
      after: createGroupMessage()
    });
  });

  xit('runs the hook', async () => {
    const data = { user_id: 1, party_id: 2 };
    const result = await app.service('dummy').create(data);
    const expect = {
      ...data,
      message_id: 3,
    };
    
    assert.deepEqual(result, expect);
  });
});
