// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const cloudinary = require('cloudinary');
const config = require('../../config/default.json');

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret
});

const upload = (imgPath) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(imgPath, result => {
      if (result) {
        resolve(result);
      } else {
        reject('Error uploading to cloudinary');
      }
    });
  });
};
// eslint-disable-next-line no-unused-vars
module.exports =  (options = {}) =>  async context => {
  const response = await upload(context.data.dataUri);
  context.data.link = response.secure_url;
  delete context.data.dataUri;
  return context;
};

