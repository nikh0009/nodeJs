const EventEmitter = require ('events');
const emitter = new EventEmitter();

/*

For demo purpose

const Logger = require ('../common/logger.js');
const logger = new Logger();

logger.on('messageLogged', (e) =>{
  console.log(e);
});
*/
const readline = require ("readline");
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});


emitter.on('personCame',(e) => {
    console.log(`${e.name} came`);
    console.log(`${e.name} is ${e.age} years old`);
});

rl.question("What is your name? ", (name) => {
  rl.question("What is your age?", (age) => {
      emitter.emit('personCame',{name: name,age:age});
      rl.close();
  });
});
