
const NUMBER_1 = parseInt(prompt('¿Dame un número?'))
const NUMBER_2 = parseInt(prompt('¿Dame otro número?'))

if (NUMBER_1 > NUMBER_2) {
    console.log(`El primer número [ ${NUMBER_1} ] es mayor`)
} else if (NUMBER_1 === NUMBER_2) {
    console.log(`El ${NUMBER_1} es igual al segundo ${NUMBER_2}`)
} else {
    console.log(`El segundo número [ ${NUMBER_2} ] es mayor`)
}
