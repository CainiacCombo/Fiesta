const cloudinary = require('cloudinary');
const config = require('../../config/default.json');

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret
});

module.exports.upload = (imgPath, callback) => {
  cloudinary.uploader.upload(imgPath, result => {
    console.log('Cloudinary photo uploaded result:');
    console.log(result);
    if (result) {
      callback(null, result);
    } else {
      callback('Error uploading to cloudinary');
    }
  });
};