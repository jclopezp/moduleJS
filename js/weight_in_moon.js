let weight = prompt ('¿Cuál es tu peso?');
console.log (weight);

let weight_int = parseInt (weight);

let weight_moon = (weight_int * (1/6));

alert (`Tu peso en la luna es: ${weight_moon} kg`);