'use strict';

var register = require('babel-core/register'),
    polyfill = require('babel-polyfill');

register({
    presets: ['stage-3']
});

require('./app');