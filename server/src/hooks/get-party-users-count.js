const getUserCount = async (app, party) => {
  const { total } = await app.service('group-users').find({
    query: {
      party_id: party.id,
      $limit: 0,
    },
  });

  party.user_count = total;

  return party;
};

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  if (context.method === 'find') {
    context.result.data = await Promise.all(context.result.data.map(party => getUserCount(context.app, party)));
  } else if (context.method === 'get') {
    context.result = await getUserCount(context.app, context.result);
  }

  return context;
};
