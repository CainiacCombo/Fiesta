// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  context.result.data = await Promise.all(context.result.data.map(async (groupUsers) => {
    if (groupUsers.party_id) {
      groupUsers.party = await context.app.service('parties').get(groupUsers.party_id);
    }
    return groupUsers;
  }));

  return context;
};
