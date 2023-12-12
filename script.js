const moment = require('moment');

const today = moment();
const tomorrow = moment().add(1, 'day').format('DD/MM/YYYY hh:mm A');

// console.log(today);
console.log(tomorrow);