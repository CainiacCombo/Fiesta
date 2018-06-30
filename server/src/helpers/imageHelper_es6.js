const async = require('async');
const fs = require('fs');
const cloudinaryHelper = require('./cloudinaryHelper');

module.exports.uploadBase64Image = (tmpPath, base64Image, cb) => {
  const imageBuffer = decodeBase64Image(base64Image);

  async.waterfall([
    //write image to tmp disk
    function writeImage(callback) {
      fs.writeFile(tmpPath, imageBuffer.data, err => {
        callback(err, tmpPath);
      });
    },
    //upload to cloudinary
    function upload(tmpPath, callback) {
      cloudinaryHelper.upload(tmpPath, callback);
    },
    function removeFile(result, callback) {
      fs.unlink(tmpPath, err => {
        callback(err, result);
      });
    }
  ], (err, result) => {
    if (err) console.error(err);
    cb(err, result);
  });
};

function decodeBase64Image(dataString) {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/), response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');
  return response;
}