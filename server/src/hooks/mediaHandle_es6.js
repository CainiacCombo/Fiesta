const User = require('../models/users.model');
const imageHelper = require('../helpers/imageHelper');

module.exports.updateProfilePhoto = (req, res) => {
  const userId = req.user._id;

  User.findById(userId, (err, user) => {
    if (user && req.body.photo) {
      imageHelper.uploadBase64Image(`./.tmp/${userId}_profile.jpg`, req.body.photo, (err, result) => {
        if (err) res.send(400, err);
        else {
          user.photo = String(result.url);
          user.save(err => {
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