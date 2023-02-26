#! /usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')
const yargs = require("yargs")
const figlet = require('figlet')
const md5= require('md5')

const usage = chalk.keyword('violet')("\nUsage: cli-tool -h <hashing>  -v <value> \n" + chalk.green("\n" + "Hash or Encode value" + "\n"))
const options = yargs
      .usage(usage)
      .option("h", {alias:"hashing", describe: "hash sentence using md5 hashing algo", type: "string", demandOption: false })
      .option("v", {alias:"value", describe: "value to hash", type: "string", demandOption: false })
      .help(true)
      .argv;


const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
if(argv.h == null && argv.hashing == null){
    console.log(chalk.yellow(figlet.textSync('cli-tool', { horizontalLayout: 'full' })));
    yargs.showHelp();
    return;
}
if(argv.value == null && argv.v == null){
    yargs.showHelp();
    return;
}


const value =  argv.v  || argv.value;

if(value==true){
    console.log(chalk.red("Please provide value to hash"))
}else{
    console.log(chalk.green(`md5 hash of ${value} is `+ chalk.redBright(`${md5(value)}`)))
}