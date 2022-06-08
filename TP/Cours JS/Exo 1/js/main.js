/*const age = 26;
let adresse = "752 Rue de l'Elgises";
let code = "62340 Hames-Boucre";
let prenom = "Allan;"

console.log("cours JS"); // affiche un message en dur
console.log(age); // affiche le contenu de la var age  (40)
console.log(typeof age);

console.log(age);
console.log(typeof age);


document.getElementById("pre").innerHTML = "Je m'apelle " + prenom;
document.getElementById("age").innerHTML = "J'ai " + age + " ans";
document.getElementById("add").innerHTML = "Mon adresse est : " + adresse + "," + code;
*/

const nom = "Julien"; //string
const age = 33; //number
const moyenne = 18.5; //number
const isCool = true; // boolean
const x = null; // object : type generique, en JS tout est objet
const y = undefined; // var inexistante

console.log("La variable nom est de type : " + typeof nom + ",la valeur est : " + nom); // ES5
console.log("La variable age est de type : " + typeof age + ",la valeur est : " + age); // ES5
console.log("La variable moyenne est de type : " + typeof moyenne + ",la valeur est : " + moyenne); // ES5
console.log("La variable isCool est de type : " + typeof isCool + ",la valeur est : " + isCool); // ES5
console.log("La variable x est de type : " + typeof x + ",la valeur est : " + x); // ES5
console.log("La variable y est de type : " + typeof y + ",la valeur est : " + y); // ES5

console.log("=========================");

console.log(`La variable nom est de type ${typeof nom} et la valeur est ${nom}`); // ES6
console.log(`La variableage est de type ${typeof age} et la valeur est ${age}`); // ES6
console.log(`La variable moyenne est de type ${typeof moyenne} et la valeur est ${moyenne}`); // ES6
console.log(`La variable isCool  est de type ${typeof isCool} et la valeur est ${isCool}`); // ES6
console.log(`La variable x est de type ${typeof x} et la valeur est ${x}`); // ES6
console.log(`La variable y est de type ${typeof y} et la valeur est ${y}`); // ES6