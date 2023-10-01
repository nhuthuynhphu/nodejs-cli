import chalk from 'chalk';
import boxen from 'boxen';
import yargs from 'yargs';
import retrieveData from './retrieveData.js';
import removeData from './removeData.js';
import addData from './addData.js';

const greeting = chalk.white.bold('Todo list manager!');

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green',
  backgroundColor: '#555555',
};
const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);

const options = yargs
  .usage('Usage: -n <name>')
  .option('n', {
    alias: 'name',
    describe: 'Your name',
    type: 'string',
    demandOption: true,
  })
  .option('c', { alias: 'create', describe: 'Create data', type: 'boolean' })
  .option('d', { alias: 'delete', describe: 'Delete data', type: 'boolean' })
  .option('r', {
    alias: 'retrieve',
    describe: 'Retrieve data',
    type: 'boolean',
  }).argv;

const hello = `Hello, ${options.name}!`;
console.log(hello);

async function main() {
  if (options.create) {
    await addData();
  }
  if (options.delete) {
    await removeData();
  }
  if (options.retrieve) {
    await retrieveData();
  }
}

main();
