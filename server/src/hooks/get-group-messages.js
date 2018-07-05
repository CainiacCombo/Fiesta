// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  if (context.method === 'find') {
    context.result.data = await Promise.all(context.result.data.map(async (groupMessage) => {
      groupMessage.message = await context.app.service('messages').get(groupMessage.message_id);
  
      return groupMessage;
    }));
  } else if (context.method === 'get') {
    const { message_id } = context.result;
    context.result.message = await context.app.service('messages').get(message_id);
  }

  return context;
};
