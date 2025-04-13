/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
export function combinarDosArrays(arrA, arrB) {
    let combinado = [...new Set([...arrA, ...arrB])].sort((a, b) =>a-b)
    return combinado
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
export function combinarNArrays(arrs) {
    let resultado=[];
    for (let i=0; i<arrs.length;i++){
        for (let j=0;j<arrs[i].length;j++){
            resultado.push(arrs[i][j])
        }

    }
    let aRetornar=[...new Set(resultado)].sort((a, b) =>a-b)
    return aRetornar
}

// exportar ambas funciones