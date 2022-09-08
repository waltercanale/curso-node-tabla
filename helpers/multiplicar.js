const fs = require ('fs');
const colors = require('colors');

const crearArchivo  =  async ( base = 4, lista = false, hasta = 10) =>{
try { 
    
let salida = '';
   
let consola= '';
    
    

for(i = 1; i <= hasta; i++) {
salida += `${base} x ${i} = ${base*i} \n`;
consola += `${base} ${'x'.red} ${i} ${'='.blue} ${base*i} \n`;
}
  
if(lista){
    console.log('========================='.white)
    console.log('tabla de multiplicar del:'.yellow, colors.blue(base));
    console.log('========================='.white);
    
console.log(consola);
}

fs.writeFileSync(`./salida/tabla- ${base}.txt`, salida);

return(`tabla-${base}.txt`);

} catch (error) {
    return error;
}

}

module.exports = {
    crearArchivo
}

