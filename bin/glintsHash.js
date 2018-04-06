#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const { getHash, checkHash } = require('../lib/hash');

const questions = [
  {
    type : 'input',
    name : 'text',
    message : 'Please enter the text you wanna hash :',
    validate: function(str){
      return str !== '' && str !== null; //Yoda had *better not* use this application!!
    }
  },
  {
    type : 'confirm',
    name : 'hash',
    message : 'Do you wanna check the hash? '
  }
];

program
  .version('0.0.1')
  .description('Wordpress Hash Node CLI for Glints');

program
  .command('hash')
  .alias('h')
  .description('Get Hash')
  .action(() => {
    prompt(questions).then(answers => {
      const text = answers.text;
      const hash = answers.hash;
      getHash(text);
      if (hash) {
        checkHash(text);
      }
    });
  })

program.parse(process.argv);