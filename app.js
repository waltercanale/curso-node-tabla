const {crearArchivo} = require ('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);
//console.log(argv)

//console.log('base: yargs', argv.base);

// const [ , , arg3 = 'base 5'] = process.argv;
// const [ , base ] = arg3.split('=')
// console.log(base);


 crearArchivo( argv.base, argv.l, argv.h)
 .then(crearArchivo => console.log(crearArchivo.rainbow, 'creado'))
 .catch(err => console.log(err))