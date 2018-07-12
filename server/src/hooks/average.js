// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  const party_id = context.result.party_id;
  console.log(party_id);
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

  context.result.newHostRatings = await Promise.all(allHost.data.map(async (user) => { 
    console.log(user);
    const userParties = await context.app.service('group-users').find({
      query: {
        user_id: user.user_id,
        is_host: true,
      }
    });

    const totalUserPartyRating = userParties.data.reduce((totalRating, userParty) => {
      return userParty.party.rating + totalRating;
    }, 0);

    const avgRating = totalUserPartyRating / userParties.total;
    console.log('avg', avgRating);
    const patchedRating = await context.app.service('users').patch(user.user_id, {
      rating: avgRating,
    });

    return {
      user_id: user.id,
      newUserRating: patchedRating.rating,
    };
  })); 

  

  return context;
};
