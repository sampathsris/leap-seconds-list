# leap-seconds-list
The list of leap seconds declared at https://www.ietf.org/timezones/data/leap-seconds.list.

# installation
```
npm install leap-seconds-list
```

# usage
```
const leapSeconds = require('leap-sconds-list');
console.log(leapSeconds);
// Should output something like below:
/*
{ leap_seconds:
   [ { timestamp: 2272060800, offset: 10 },
     { timestamp: 2287785600, offset: 11 },
     { timestamp: 2303683200, offset: 12 },
     { timestamp: 2335219200, offset: 13 },
     { timestamp: 2366755200, offset: 14 },
     { timestamp: 2398291200, offset: 15 },
     { timestamp: 2429913600, offset: 16 },
     { timestamp: 2461449600, offset: 17 },
     { timestamp: 2492985600, offset: 18 },
     { timestamp: 2524521600, offset: 19 },
     { timestamp: 2571782400, offset: 20 },
     { timestamp: 2603318400, offset: 21 },
     { timestamp: 2634854400, offset: 22 },
     { timestamp: 2698012800, offset: 23 },
     { timestamp: 2776982400, offset: 24 },
     { timestamp: 2840140800, offset: 25 },
     { timestamp: 2871676800, offset: 26 },
     { timestamp: 2918937600, offset: 27 },
     { timestamp: 2950473600, offset: 28 },
     { timestamp: 2982009600, offset: 29 },
     { timestamp: 3029443200, offset: 30 },
     { timestamp: 3076704000, offset: 31 },
     { timestamp: 3124137600, offset: 32 },
     { timestamp: 3345062400, offset: 33 },
     { timestamp: 3439756800, offset: 34 },
     { timestamp: 3550089600, offset: 35 },
     { timestamp: 3644697600, offset: 36 },
     { timestamp: 3692217600, offset: 37 } ],
  last_updated: 3676924800,
  expiration_date: 3707596800,
  hash: 'dacf2c42 2c4765d6 3c797af8 2cf630eb 699c8c67' }
 */
```