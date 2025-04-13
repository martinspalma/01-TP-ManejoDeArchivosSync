/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
export function transformarStringEnArrayDeNumeros(str, separador) {
    let arrayDeNumeros= str.split(separador).map(Number)
return arrayDeNumeros
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
export function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    let arrayDeString= arr.join(separador)
return arrayDeString
    
}

// exportar ambas funciones