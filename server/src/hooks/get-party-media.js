const getMedia = (app, party_id) => app.service('media').find({
  query: {
    party_id,
    $limit: 100,
  },
}).then(response => response.data);

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  if (context.method === 'find') {
    context.result.data = await Promise.all(context.result.data.map(async party => ({
      ...party,
      media: await getMedia(context.app, context.result.id),
    })));
  } else if (context.method === 'get') {
    const mediaResponse = await getMedia(context.app, context.result.id);
    context.result.media = mediaResponse;
  }

  return context;
};
