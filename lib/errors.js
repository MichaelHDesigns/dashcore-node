'use strict';

var createError = require('errno').create;

var HthcoreNodeError = createError('HthcoreNodeError');

var RPCError = createError('RPCError', HthcoreNodeError);

module.exports = {
  Error: HthcoreNodeError,
  RPCError: RPCError
};
