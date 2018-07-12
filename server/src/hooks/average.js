// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  const party_id = context.result.party_id;

  const response = await context.app.service('party-ratings').find({ query: { party_id } });

  const allRating = response.data.reduce((rating, party) => party.rating + rating, 0);
  const avgRating = allRating / response.total;
  const patchResponse = await context.app.service('parties').patch(party_id, {
    rating: avgRating,
  });

  context.result.newPartyRating = patchResponse.rating;

  const allHost = await context.app.service('group-users').find({
    query: {
      party_id,
      is_host: true,
    }
  });

  allHost.data.forEach(async (user) => { 

    const userParties = await context.app.service('group-users').find({
      query: {
        user_id: user.id,
        is_host: true,
      }
    });

    const totalUserPartyRating = userParties.data.reduce((totalRating, userParty) => {
      return userParty.party.rating + totalRating;
    }, 0);

    const avgRating = totalUserPartyRating / userParties.total;

    const patchedRating = await context.app.service('users').patch(user.id, {
      rating: avgRating,
    });

    context.result.newHostRating = patchedRating.rating;
  }); 

  

  return context;
};
