// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {user_id, party_id } = context.data;
    const message_id = context.result.id;
    if (party_id) {
      await context.app.service('group-messages').create({
        user_id, 
        party_id,
        message_id,
      });
    }
    return context;
  };
};
