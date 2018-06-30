var cloudinary = require('cloudinary');
var config = require('../../config/default.json');

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.apikey,
  api_secret: config.cloudinary.apisecret
});

module.exports.upload = function (imgPath, callback) {
  cloudinary.uploader.upload(imgPath, function (result) {
    console.log('Cloudinary photo uploaded result:');
    console.log(result);
    if (result) {
      callback(null, result);
    } else {
      callback('Error uploading to cloudinary');
    }
  });
};