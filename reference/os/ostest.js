const os = require ('os');
const btgs = require ('./bytestogigs');

var free = os.freemem();
var total = os.totalmem();
var per = (free/total) * 100;
console.log(os.arch());
console.log(os.uptime());
console.log(`I'm on ${os.platform()}`);
console.log(per);
console.log(`Total memory ${btgs(total)}`);
console.log(`Free memory ${btgs(free)}`);
