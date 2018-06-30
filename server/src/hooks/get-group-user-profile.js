// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  if (context.params.query.party_id) {
    context.result.data = await Promise.all(context.result.data.map(async (groupUser) => {
      groupUser.user = await context.app.service('users').get(groupUser.user_id);
      return groupUser;
    }));
  }

  return context;
};
