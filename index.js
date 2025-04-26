import {leerArchivoComoString, escribirTextoEnArchivo} from './src/utils/fileUtils.js';
import {transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString} from './src/utils/transformUtils.js';
import {combinarDosArrays, combinarNArrays, combinarNArrays2} from './src/apareo.js';

console.log(escribirTextoEnArchivo('./in/mensaje.txt', "--------Trabajo Practico N°1 Manejo de Archivos----------", true))

// leo los 4 archivos a memoria
const archivo1=leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in')
const archivo2=leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in')
const archivo3=leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in')
const archivo4=leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in')


// preparo los 4 arrays a partir de los archivo leidos
const array1 = transformarStringEnArrayDeNumeros(archivo1, ',')
const array2 = transformarStringEnArrayDeNumeros(archivo2, ',')
const array3 = transformarStringEnArrayDeNumeros(archivo3, ',')
const array4 = transformarStringEnArrayDeNumeros(archivo4, ',')

// combino los primeros dos arrays
escribirTextoEnArchivo('./out/combinado3.out',
    transformarArrayDeNumerosAUnSoloString(combinarDosArrays(array1, array2), ','), true);

// combino los cuatro arrays

let aCombinar= [array1, array2, array3, array4]



escribirTextoEnArchivo('./out/combinado5.out',
    transformarArrayDeNumerosAUnSoloString(combinarNArrays2(aCombinar), ','), true);

    console.log('fin TP')