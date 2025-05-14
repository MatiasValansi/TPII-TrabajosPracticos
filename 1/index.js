/**
### 1. leerArchivoComoString

**Descripción:**
Recibe la ruta del archivo que se quiere leer y devuelve un único string con todo el contenido del mismo.

**Implementación en JavaScript:**

```js
const fs = require('fs');

function leerArchivoComoString(ruta) {
    try {
        return fs.readFileSync(ruta, 'utf8');
    } catch (error) {
        console.error(`Error al leer el archivo: ${error.message}`);
        return null;
    }
}
```

---
 */
import fs from 'fs'

async function  leerArchivo(ruta){
    try {
        const archivo = await fs.readFileSync(ruta, 'utf-8')
        return archivo    
    } catch (error) {
        console.error(`Error al leer el archivo: ${error.message} en la ruta ${ruta}`);
        return null        
    }
    
}

/**
### 2. escribirTextoEnArchivo

**Descripción:**
Recibe una ruta, un texto y un flag, y graba ese texto en un archivo en la ruta dada. Si el directorio es válido pero el archivo no existe, decide qué hacer según el flag:

- Con el flag en `true`, crea el archivo y lo escribe.
- Con el flag en `false`, lanza el error "El archivo no existe".
 */

async function escrbirArchivo(ruta, contenido, flag) {
    const existe = fs.existsSync(ruta)

    if (!existe && !flag) {
        throw new Error("El archivo no existe");        
    } else {
        fs.writeFileSync(ruta, contenido, 'utf8')
    }

}

/**
### 3. transformarStringEnArrayDeNumeros

**Descripción:**
Recibe un texto y una secuencia de caracteres que usará como separador. Devuelve un array con todos los números producto de partir el texto cada vez que aparezca la secuencia separadora. Si alguna de las partes no es numérica, no se incluirá en el resultado.
 */

 const texto = '123 - 456 - 111213 - 14quince16 - unosiete18unonueve'
 const separador = '-'

 function convertirAArray(texto, separador) {
    
    const arrayNums = []

    texto.forEach(cadaCaracter => {
        if (!isNaN(cadaCaracter)) {
            arrayNums.push(cadaCaracter)
        } else if (cadaCaracter == separador.trim()){
            arrayNums.push(', ')
        }
    });

    return arrayNums
 }

/**
### 4. transformarArrayDeNumerosAUnSoloString

**Descripción:**
Recibe un array con números y una secuencia de caracteres para usar como separador. Devuelve un único string que es la unión de todos los números del array, intercalando la secuencia separadora entre cada uno.
 */

const array = [123, 456, 789, 101112]
const separadorArray = "-"

function deArrayAString(array, separador) {
    textoArray = ''

    array.array.forEach(cadaCaracter => {
        if (!isNaN(cadaCaracter) || cadaCaracter == separador) {
            textoArray.push(cadaCaracter)
        }
    });

    return textoArray
}

/**
### 5. combinarDosArrays

**Descripción:**
Recibe dos arrays de números ordenados en forma ascendente y sin repetidos dentro de cada uno. Devuelve un nuevo array con todos los elementos de ambos, también ordenado en forma ascendente y sin repetidos.
*/

const array1 = [1, 3, 7, 10]
const array2 = [2, 4, 6, 8, 10]

function ordenarArrays(array1, array2){
    const arrayCompleto = array1 + array2

    arrayCompleto.sort((a, b) => a - b)

    //Verifico que no haya repetidos:

    let numAnterior = -1
    arrayCompleto.array.forEach(cadaNumero => {
        if (cadaNumero == numAnterior) {
            let index = arrayCompleto.indexOf(cadaNumero);
            arrayCompleto.splice(index, 1)
        }

        numAnterior = cadaNumero
    });

    return arrayCompleto
}

/**
### 6. combinarNArrays

**Descripción:**
Similar a `combinarDosArrays`, pero recibe un array de arrays de números ordenados en forma ascendente y sin repetidos. Devuelve un nuevo array con la combinación de todos los números, también ordenado en forma ascendente y sin repetidos.
*/

const arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]];

function ordenarMatriz(arrayAOrdenar){

    arrayCompleto = []
    
    //Añado cada número de cada array al array
    arrayCompleto.array.forEach(cadaSubArray => {
        cadaSubArray.forEach(cadaNumero => {
            arrayCompleto.push(cadaNumero)
        })
    })

    //Los ordeno
    arrayCompleto.sort((a, b) => a - b)

    //Verifico que no haya repetidos:
    let numAnterior = -1
    arrayCompleto.array.forEach(cadaNumero => {
        if (cadaNumero == numAnterior) {
            let index = arrayCompleto.indexOf(cadaNumero);
            arrayCompleto.splice(index, 1)
        }

        numAnterior = cadaNumero
    });

    return arrayCompleto

}