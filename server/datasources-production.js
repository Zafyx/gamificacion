// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-offline-sync
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

var GLOBAL_CONFIG = require('../global-config');

var env = (process.env.NODE_ENV || 'development');
var isDevEnv = env === 'development' || env === 'test';

module.exports = {
  hostname: GLOBAL_CONFIG.hostname,
  restApiRoot: GLOBAL_CONFIG.restApiRoot,
  livereload: process.env.LIVE_RELOAD,
  isDevEnv: isDevEnv,
  indexFile: require.resolve(isDevEnv ?
    '../client/ngapp/index.html' : '../client/dist/index.html'),
  port: GLOBAL_CONFIG.port,
  legacyExplorer: GLOBAL_CONFIG.legacyExplorer
};
conf.db = {
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'gamificacion',
  name: "db",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connector: process.env.DB_CONNECTOR || 'mysql'
};