const twilio = require('../twilio');
const config = require('../../config/default.json');

const twilio_number = process.env.TWILIO_NUMBER || config.twilio.twilio_number;

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => async context => {
  const phoneNumber = context.data.phoneNumber;

  if (phoneNumber) {
    await twilio.messages.create({
      to: phoneNumber,
      from: twilio_number,
      body: 'You have been invited to a party on ¡Fiesta!',
    });
  }

  return context;
};
