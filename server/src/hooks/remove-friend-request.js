const { NotFound } = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  const { user1_id, user2_id } = context.data;

  const { total, data } = await context.app.service('friend-requests').find({
    query: {
      $or: [
        { from_user_id: user1_id, to_user_id: user2_id },
        { from_user_id: user2_id, to_user_id: user1_id },
      ],
    },
  });

  if (total === 0) {
    throw new NotFound(`Could not find a friend request between "${user1_id}" and "${user2_id}"`);
  } else {
    await context.app.service('friend-requests').remove(data[0].id);
  }

  return context;
};
