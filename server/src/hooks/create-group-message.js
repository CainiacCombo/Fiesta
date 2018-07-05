// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {user_id, party_id } = context.data;
    const message_id = context.result.id;
    if (party_id) {
      const { id } = await context.app.service('group-messages').create({
        user_id, 
        party_id,
        message_id,
      });
      const groupMessage = await context.app.service('group-messages').get(id);
      context.service('group-messages').emit('new-message', groupMessage);
    }
    return context;
  };
};
