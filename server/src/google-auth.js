const Strategy = require('passport-custom');
const axios = require('axios');

const GOOGLE_AUTH = 'https://www.googleapis.com/oauth2/v1/tokeninfo';

// eslint-disable-next-line no-unused-vars
module.exports = opts => {
  return function() {
    const verifier = async (req, done) => {
      const accessToken = req.body.access_token;

      try {
        const tokenResponse = await axios.get(`${GOOGLE_AUTH}?access_token=${accessToken}`);
        const usersResponse = await this.service('users').find({ googleId: tokenResponse.data.user_id });
        const [user] = usersResponse.data;

        if (!user) throw 'No user with googleId';

        done(null, user, { userId: user.id });
      } catch (e) {
        done(null, false);
      }
    };

    this.passport.use('google', new Strategy(verifier));
    this.passport.options('google', {});
  };
};
