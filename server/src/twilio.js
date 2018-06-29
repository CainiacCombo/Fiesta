const Twilio = require('twilio');
const config = require('../config/default.json');

const accountSid = process.env.TWILIO_ACCOUNT_SID || config.twilio.accountSid;
const authToken = process.env.TWILIO_AUTH_TOKEN || config.twilio.authToken;

let client;

try {
  client = new Twilio(accountSid, authToken);
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('Twilio authentication failed:', e);
}

module.exports = client;
