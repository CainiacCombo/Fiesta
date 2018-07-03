// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const partyID = context.result.party_id
    
    const response = await context.app.service('party-ratings').find({
      query: {
        party_id: partyID,
      }
    });

    const allRating = response.data.reduce((rating, party) => party.rating + rating, 0);

    const avgRating = allRating / response.total;

    const patchResponse = await context.app.service('party-ratings').patch(partyID, {
      rating: avgRating,
    });
    context.result.newPartyRating = patchResponse.rating;
    return context;
  };
};
