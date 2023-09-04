/*
1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.*/
console.log("-Ejercicio 1-");

const parImpar = numero => {
    if (numero % 2 == 0) {
        console.log("El numero ingresado es par")
    } else {
        console.log("El numero ingresado es impar")
    }
}
parImpar(0);
parImpar(3);
parImpar(8);
/*
2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
*/
console.log("-Ejercicio 2-");

const numeroMayor = (num1, num2) => {
    if (num1 === num2) {
        console.log("Los numeros son iguales");
    } else if (num1 > num2) {
        console.log(` ${num1} es el numero mayor`)
    } else {
        console.log(` ${num2} es el numero mayor`)
    }
}

numeroMayor(2, 2);
numeroMayor(45, 90);
numeroMayor(5, 1);

/*
3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
*/

console.log("-Ejercicio 3-");

const multiploDeCinco = numero => {
    if ((numero % 5 == 0) && numero != 0) {
        console.log(` El numero ${numero} multiplo de 5`)
    } else {
        console.log(` El numero ${numero} no es multiplo de 5`)
    }
}

multiploDeCinco(100);
multiploDeCinco(0);
multiploDeCinco(85);
multiploDeCinco(98);
/*
4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
*/

console.log("- Ejercicio 4-");


const imprimirHasta = numero => {
    for (let i = 0; i <= numero; i++) {
        console.log(` ${i}`)

    }
}
imprimirHasta(15)

/*
5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
*/

console.log("-Ejercicio 5-");

const ImprimirNveces = (palabra, numero) => {
    for (let i = 0; i <= numero; i++) {
        console.log(` ${palabra}`);

    }
}

ImprimirNveces("Hola", 10);

/*
6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
*/
console.log("-Ejercicio 6-");
let pokemons = ['bulbasaur',
    'ivysaur',
    'venusaur',
    'squirtle',
    'wartortle',
    'blastoise',
    'charmander',
    'charmeleon',
    'charizard',];


const imprimirArray = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }
}

imprimirArray(pokemons);

/*
7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
*/
console.log("-Ejercicio 7-");

let arrayNumeros = [12, 22, 33, 44, 55, 66, 77, 86, 99, 101];

const imprimirArraySinQuinta = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (i === 5) {
            continue;
        }
        console.log(arr[i]);
    }
}

imprimirArraySinQuinta(arrayNumeros);

/*
8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro. */
console.log("-Ejercicio 8-");

let arrayNum = [12, 22, 33, 44, 55, 66, 77, 86, 99, 101]

const imprimirNumeroPorN = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {

        console.log(` ${arr[i]} * ${num} = ${arr[i] * num}`);

    }
}

imprimirNumeroPorN(arrayNum, 10);