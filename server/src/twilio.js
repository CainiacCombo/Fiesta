const twilio = require('twilio');

var accountSid = 'AC4346d5a841ab4499fd47d5893b89c4e2'; // Your Account SID from www.twilio.com/console
var authToken = '415e158a5b4c14f27cb5bcc1ff3b0d6a';   // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);

client.messages.create({
  body: 'washam witit lah bih',
  to: '+15045156588',  // Text this number
  from: '+15046080915' // From a valid Twilio number
})
  .then((message) => console.log(message.sid));