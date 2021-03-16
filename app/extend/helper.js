const moment = require('moment');
// const moment = require('moment');


exports.relativeTime = time => time ? moment(new Date(time * 1000)).fromNow() : moment().fromNow();
// exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

// const moment = require('moment');