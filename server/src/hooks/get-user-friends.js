// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  const userId = context.params.query.user_id;

  if (userId) {
    // find all friend objects where user1_id or user2_id is userId
    const friendsResponse = await context.app.service('friends').find({
      query: {
        $or: [
          { user1_id: userId },
          { user2_id: userId },
        ],
      },
    });

    // map over the friend objects, replacing them with the userId's friend's data
    friendsResponse.data = await Promise.all(friendsResponse.data.map(async (friendship) => {
      const friendedUserId = friendship.user1_id === userId ? friendship.user2_id : friendship.user1_id;
      const friendedUser = await context.app.service('users').get(friendedUserId);

      return friendedUser;
    }));

    context.result = friendsResponse;
    context.error = null;
  }

  return context;
};
