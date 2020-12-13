
function nombreFuncion (parametros, ...) {
    //sentencias
}

function nombreFuncion () {
    let nombre = prompt('Cual es tu nombre?')
    console.log(nombre)
}

function backwardName (name, lastName) {
    console.log(name, lastName)
}

function add (valor1, valor2) {
    console.log(valor1 + valor2)
}

// Parametros cuando se define
// Argumentos cuando se manda a llamar 

var str1

function tabMul (str1) {
    let str_a = str1.split ("")
    //console.log(str_a)
    let str_int = str_a.map(function (x) {
        return parseInt(x, 10)
    })
    console.log(str_int)
}
