// Une callback est une fonction qui s'implémente et qui s'éxécute sur place

const voitures = [
    'Ferrari',
    'Mercedes',
    'BMW',
    'Maserati'
];

let tab = voitures.map((voiture) => voiture.length);
// Array(4) [ 7, 8, 3, 8 ]

console.log(tab);
document.write("Lenght des marques : " + tab);




