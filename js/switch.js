const WEATHER = (prompt('¿Como esta el clima hoy? escoge una de las opciones 1) soleado 2) lluvioso 3) nevando 4) nublado 5) otro'))

switch(WEATHER) {
    case "1":
        console.log('El día esta soleado por aqui.')
        break;
    case "2":
        console.log('El día esta lluvioso por aqui.')
        break;
    case "3":
        console.log('Esta nevando por aqui.')
        break;
    case "4":
        console.log('El día esta nublado por aqui.')
        break;
    case "5":
        let OPTION_2 = (prompt('¿Como describes el clima del dia de hoy?'))
        console.log(`El día esta ${OPTION_2}`)
        break;
    default:
        console.log(`Debes escoger un número entre 1 y 5`)
}