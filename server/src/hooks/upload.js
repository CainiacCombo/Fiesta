const cloudinary = require('cloudinary');
const config = require('../../config/default.json');

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});

const upload = imgPath => new Promise((resolve, reject) =>
  cloudinary.uploader.upload(imgPath, result => result.error
    ? reject(result.error)
    : resolve(result)));

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  const response = await upload(context.data.dataUri);

  context.data.link = response.secure_url;
  delete context.data.dataUri;

  return context;
};

