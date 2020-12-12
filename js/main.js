console.log('hola koders')

for (let i = 10; i >= 1; i--){
    console.log(`8 x ${i} = ${8 * i}`)
}

//Imprimir numeros pares en el rango de 1 a 100

for (let i = 1, i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let counter = 1
while (counter <= 100) {
    if(counter % 2 === 0) {
        console.log(counter)
}
counter++
}

//Reverse invertir el orden
const stringToReverse = "Hola mundo"
let stringReversed
for (let i = stringToReverse.length - 1; i >= 0 ; i-- ) {
    stringReversed += stringReversed[i]
}
console.log(stringReversed)

// 

while (condicion) {
    //sentencia

    // muta la condicion o variable
}

//---------------------- 
// imprimir la tabla del 7 con while

let counter= 1
while (counter <= 10) {
    //sentencia
    console.log(`7 x ${counter} = ${7 * counter}`)
    // muta la condicion o variable
    counter = counter + 1
}



do {
    //sentencia

    // muta la condicion o variable
} while(condicion)

//---------------------- 
// imprimir la tabla del 7 con do

let counterDo = 1
do {
    //sentencias
    console.log(`7 x ${counterDo} = ${7 * counterDo}`)
    counterDo++
} while(counterDo < 10)



