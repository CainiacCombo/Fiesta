// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async (context) => {
  const { from_user_id, to_user_id } = context.params.query;
  const showFrom = !!to_user_id;
  const showTo = !!from_user_id;

  context.result.data = await Promise.all(context.result.data.map(async (data) => {
    const { from_user_id, to_user_id } = data;

    if (showFrom) {
      data.from = await context.app.service('users').get(from_user_id);
    }

    if (showTo) {
      data.to = await context.app.service('users').get(to_user_id);
    }

    return data;
  }));
  return context;
};
