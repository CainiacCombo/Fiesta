const User = require('../models/users.model');
const imageHelper = require('../helpers/imageHelper');

module.exports.updateProfilePhoto = function (req, res) {
  const userId = req.user._id;

  User.findById(userId, function (err, user) {
    if (user && req.body.photo) {
      imageHelper.uploadBase64Image('./.tmp/' + userId + '_profile.jpg', req.body.photo, function (err, result) {
        if (err) res.send(400, err);
        else {
          user.photo = String(result.url);
          user.save(function (err) {
            if (err) return validationError(res, err);
            res.send(200);
          });
        }
      });
    } else {
      res.send(400);
    }
  });
};