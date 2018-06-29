const twilio = require('twilio');

var accountSid = 'AC4346d5a841ab4499fd47d5893b89c4e2'; // Your Account SID from www.twilio.com/console
var authToken = '415e158a5b4c14f27cb5bcc1ff3b0d6a';   // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);
const phoneNum = ['+15043731285', '+15044621531', '+15045156588'];
// const friends = ['+18327257785', '15044057318', '15045709924', '+17065877019', '+15043205909', '+15042748597'];
phoneNum.forEach((num) => {
  console.log(num);
  setTimeout(() => {
    client.messages.create({
      body: 'you have been invited to the party',
      to: num, // Text this number 
      from: '+15046080915' // From a valid Twilio number
    }).then((message) => console.log(`sent to ${num} sid: ${message.sid}`))
      .catch((error) => console.log(`did NOT send to ${num} error: ${error}`));
  }, 2000);
});
