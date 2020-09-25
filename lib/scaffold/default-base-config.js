<<<<<<< HEAD
'use strict';

var path = require('path');

/**
 * Will return the path and default dashcore-node configuration on environment variables
 * or default locations.
 * @param {Object} options
 * @param {String} options.network - "testnet" or "livenet"
 * @param {String} options.datadir - Absolute path to Dash database directory
 */
function getDefaultBaseConfig(options) {
  if (!options) {
    options = {};
  }

  var datadir = options.datadir || path.resolve(process.env.HOME, '.hth');

  return {
    path: process.cwd(),
    config: {
      network: options.network || 'livenet',
      port: 65000,
      services: ['hthd', 'web'],
      servicesConfig: {
        hthd: {
          spawn: {
            datadir: datadir,
            exec: path.resolve(__dirname, datadir, 'hthd')
          }
        }
      }
    }
  };
}

module.exports = getDefaultBaseConfig;
=======
'use strict';

var path = require('path');

/**
 * Will return the path and default dashcore-node configuration on environment variables
 * or default locations.
 * @param {Object} options
 * @param {String} options.network - "testnet" or "livenet"
 * @param {String} options.datadir - Absolute path to Dash database directory
 */
function getDefaultBaseConfig(options) {
  if (!options) {
    options = {};
  }

  var datadir = options.datadir || path.resolve(process.env.HOME, '.helpthehomeless');

  return {
    path: process.cwd(),
    config: {
      network: options.network || 'livenet',
      port: 65000,
      services: ['helpthehomelessd', 'web'],
      servicesConfig: {
        helpthehomelessd: {
          spawn: {
            datadir: datadir,
            exec: path.resolve(__dirname, datadir, 'helpthehomelessd')
          }
        }
      }
    }
  };
}

module.exports = getDefaultBaseConfig;
>>>>>>> b9f71dd0ad12d9122965bb2fcda3aae713c1bdae
