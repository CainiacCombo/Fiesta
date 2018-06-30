const defaultOptions = {
  keys: [],
  all: false,
};

const convertObjectKeysToBoolean = (keys, obj) => keys.reduce((newObj, key) => {
  newObj[key] = newObj[key] === 1 ? true : false;
  return newObj;
}, obj);

module.exports = ({ keys, all } = defaultOptions) => async context => {
  all
    ? context.result.data = context.result.data.map(obj => convertObjectKeysToBoolean(keys, obj))
    : convertObjectKeysToBoolean(keys, context.result);

  return context;
};
