#!/usr/bin/env node

'use strict';

var meow = require('meow');
var easyRename = require('./');

var cli = meow([
	'Usage: ',
	'$ easy-rename \'your bad text\''
]);

console.log(easyRename(cli.input[0] || ''));