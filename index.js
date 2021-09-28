//const chalk = require('chalk');
//console.log(chalk.blue('Hello, npm!'));

const userInfo = require('./information');
//console.log(`Hi, my name is ${userInfo.wilderName} and I'm  in ${userInfo.campus} campus`);

var cowsay = require("cowsay");

//console.log(`Hi, my name is ${userInfo.wilderName} and I'm  in ${userInfo.campus} campus`);


console.log(cowsay.say({
   text : `Hi, my name is ${userInfo.wilderName} and I'm  in ${userInfo.campus} campus` ,
   e : "oO",
   T : "U "
}));

// or cowsay.think()