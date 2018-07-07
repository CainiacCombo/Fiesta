const upload = require('../cloudinary');

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  const response = await upload(context.data.dataUri);

  context.data.link = response.secure_url;
  delete context.data.dataUri;

  return context;
};

