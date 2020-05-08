require('dotenv').config();
const chalk = require('chalk');
const ProgressBar = require('progress');

console.log(chalk.red('Welcome to color'));

const bar = new ProgressBar(':bar', {total:100});

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete)
  clearInterval(timer);
},1000)
