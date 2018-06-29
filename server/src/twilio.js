const Twilio = require('twilio');
const config = require('../config/default.json');

const accountSid = process.env.TWILIO_ACCOUNT_SID || config.twilio;
const authToken = process.env.TWILIO_AUTH_TOKEN || config.twilio;
const client = new Twilio(accountSid, authToken);

module.exports = client;
