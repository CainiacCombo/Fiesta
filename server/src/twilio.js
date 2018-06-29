const Twilio = require('twilio');
const config = require('../config/default.json');

const { accountSid, authToken } = config.twilio;
const client = new Twilio(accountSid, authToken);

module.exports = client;
