const { describe } = require('yargs');

const argv = require('yargs')
      .option('b', {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'la base de la tabla de multiplicar'
      })

      .option('l', {
      alias: 'lista',
      type: 'boolean',
      default: false,
      describe: 'muestra la tabla de multiplicar'
      })

      .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'hasta que numero vamos hacer la lista'
        })

      .check((argv, options) => {
        if(isNaN(argv.base)){
            throw 'la base tiene que ser un numero'
        }
        return true;
      })
      .argv;

      module.exports = argv;