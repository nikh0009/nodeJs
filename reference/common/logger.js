const EventEmitter = require ('events');

var url = "http://sometempurl.com";

class Logger extends EventEmitter {
  log (message) {
    // You can do some cool stuff here.. I'm just loggin it on console.
    console.log(message);

    this.emit('messageLogged',{id:1,url:url});
  }
}

module.exports = Logger;
