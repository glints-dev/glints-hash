#!/usr/bin/env node

const program = require('commander');

const { getHash } = require('../lib/hash');

program
  .version('0.0.1')
  .description('Contact management system');

program
  .command('hash')
  .alias('g')
  .description('Get Hash')
  .action(text => getHash(text));

program.parse(process.argv);