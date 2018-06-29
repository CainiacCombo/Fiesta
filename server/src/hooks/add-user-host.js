// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  await context.app.service('group-users').create({
    user_id: context.data.userId,
    party_id: context.result.id,
    is_host: true,
  });

  return context;
};
