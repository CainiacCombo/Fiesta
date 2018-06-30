const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const getGroupMessages = require('../../src/hooks/get-group-messages');

describe('\'get-group-messages\' hook', () => {
  let app;
  let messages;
  let groupMessages;

  beforeEach(() => {
    app = feathers();
    messages = {
      1: { id: 1, text: 'Wow', user_id: 1 },
      2: { id: 2, text: 'Uhuh', user_id: 1 },
    };
    groupMessages = [
      { id: 1, message_id: 1, party_id: 1 },
      { id: 1, message_id: 2, party_id: 1 },
    ];

    app.use('/messages', { get: async id => messages[id] });
    app.use('/group-messages', {
      find: async () => ({
        total: groupMessages.length,
        limit: 10,
        skip: 0,
        data: groupMessages,
      }),
    });

    app.service('group-messages').hooks({
      after: getGroupMessages(),
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('group-messages').find();
    const expected = {
      total: groupMessages.length,
      limit: 10,
      skip: 0,
      data: groupMessages.map((groupMessage) => ({
        ...groupMessage,
        message: messages[groupMessage.message_id],
      })),
    };

    assert.deepEqual(result, expected);
  });
});
