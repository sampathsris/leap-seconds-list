
const fs = require('fs');

const RADIX = 10;

let list = JSON.parse(fs.readFileSync('list.json', 'utf8'));

list.leap_seconds = list.leap_seconds.map((entry) => {
    return {
        timestamp: parseInt(entry[0], RADIX),
        offset: parseInt(entry[1], RADIX)
    }
});;

list.last_updated = parseInt(list.last_updated, RADIX);
list.expiration_date = parseInt(list.expiration_date, RADIX);

module.exports = list;
