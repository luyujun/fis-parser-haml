/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var haml = require('haml');

module.exports = function(content, file, conf){
  var fn = haml.render(content, conf);
  return fn;
};
