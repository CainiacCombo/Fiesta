const cloudinary = require('cloudinary');
const config = require('../../config/default.json');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || config.cloudinary.cloud_name,
  api_key: process.env.CLOUDINARY_API_KEY || config.cloudinary.api_key,
  api_secret: process.env.CLOUDINARY_API_SECRET || config.cloudinary.api_secret,
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

