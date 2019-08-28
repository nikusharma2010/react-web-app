const nconf = require('nconf');
const path = require('path');

nconf.file('defaults', {
  file: path.join(__dirname, './config/config.json')
});
nconf.file('environment', {
  file: path.join(__dirname, `./config/config.${process.env.NODE_ENV}.json`)
});

module.exports = nconf.get();
