const upload = require('../cloudinary');
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const image = context.data.dataUri;

    if(image) {
      const response = await upload(image);
      context.data.match_link = response.secure_url;
      delete context.data.dataUri;
    } 

    

    return context;
  };
};
