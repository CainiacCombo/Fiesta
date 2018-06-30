// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  context.result.data = await Promise.all(context.result.data.map(async (groupUser) => {
    if (groupUser.party_id) {
      groupUser.party = await context.app.service('parties').get(groupUser.party_id);
    }

    return groupUser;
  }));

  return context;
};
