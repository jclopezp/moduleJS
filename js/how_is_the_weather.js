
const OPTION_1 = (prompt('¿Como esta el clima hoy? escoge una de las opciones 1) soleado 2) lluvioso 3) nevando 4) nublado 5) otro'))

if (OPTION_1 == 1) {
    console.log(`El día esta soleado por aqui.`)
} else if (OPTION_1 == 2) {
    console.log(`El día esta lluvioso por aqui.`)
} else if (OPTION_1 == 3) {
    console.log(`Esta nevando por aqui.`)
} else if (OPTION_1 == 4) {
    console.log(`El día esta nublado por aqui.`)
} else if (OPTION_1 == 5) {
    let OPTION_2 = (prompt('¿Como describes el clima del dia de hoy?'))
    console.log(`El día esta ${OPTION_2}`)
} else {
    console.log(`Debes escoger un número entre 1 y 5`)
}
