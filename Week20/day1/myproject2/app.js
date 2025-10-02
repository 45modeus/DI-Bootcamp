const moment = require("moment");

const now = moment();

const dateTime = now.format('DD-MM-YYYY HH:mm:ss');

console.log("Current Date and Time:", dateTime);