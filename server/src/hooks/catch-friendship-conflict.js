const { Conflict } = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  const { user1_id, user2_id } = context.data;
  const friends = await context.app.service('friends').find({
    query: {
      $or: [
        { user1_id, user2_id },
        { user1_id: user2_id, user2_id: user1_id },
      ],
    },
  });

  if (friends.total > 0) {
    throw new Conflict(`A friendship has already been created between users "${user1_id}" and "${user2_id}"`);
  }

  return context;
};
