// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  context.result.data = await Promise.all(context.result.data.map(async (groupMessage) => {
    groupMessage.message = await context.app.service('messages').get(groupMessage.message_id);

    return groupMessage;
  }));

  return context;
};
