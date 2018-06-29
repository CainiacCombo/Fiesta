const twilio = require('../twilio');
const config = require('../../config/default.json');

const { twilio_number } = config.twilio;

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  const phoneNumber = context.data.phoneNumber;

  if (phoneNumber) {
    await twilio.messages.create({
      to: `+1${phoneNumber}`,
      from: twilio_number,
      body: `You have been invited to a party on ¡Fiesta!`,
    });
  }

  return context;
};
