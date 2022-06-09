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

const nom = "Allan"; //string
const age = 26; //number
const moyenne = 16.8; //number
const isCool = true; // boolean
const x = null; // object : type generique, en JS tout est objet
const y = undefined; // var inexistante

console.log("La variable nom est de type : " + typeof nom + ",la valeur est : " + nom + " qui est de " + nom.length + " caractères"); // ES5
console.log("La variable age est de type : " + typeof age + ",la valeur est : " + age); // ES5
console.log("La variable moyenne est de type : " + typeof moyenne + ",la valeur est : " + moyenne); // ES5
console.log("La variable isCool est de type : " + typeof isCool + ",la valeur est : " + isCool); // ES5
console.log("La variable x est de type : " + typeof x + ",la valeur est : " + x); // ES5
console.log("La variable y est de type : " + typeof y + ",la valeur est : " + y); // ES5

console.log("=========================");

console.log(`La variable nom est de type ${typeof nom} et la valeur est ${nom} qui est de ${nom.length} caractères`); // ES6
console.log(`La variable age est de type ${typeof age} et la valeur est ${age}`); // ES6
console.log(`La variable moyenne est de type ${typeof moyenne} et la valeur est ${moyenne}`); // ES6
console.log(`La variable isCool  est de type ${typeof isCool} et la valeur est ${isCool}`); // ES6
console.log(`La variable x est de type ${typeof x} et la valeur est ${x}`); // ES6
console.log(`La variable y est de type ${typeof y} et la valeur est ${y}`); // ES6

console.log("=========================");

console.log(`Mon nom en maj : ${nom.toUpperCase()}`); // nom en maj
console.log(`Mon nom en min : ${nom.toLowerCase()}`); // nom en min
console.log(`Sous chaine : ${nom.substring(0,3)}`); // extrait une sous chaine, les index de 0 à 3 ==> 3 caract

console.log("=========================");

console.log(`Sous chaine : ${nom.substring(0,4).toUpperCase()}`); // prend les 4 caract et les transforme en maj
console.log(nom.split('')); // decoupe la chaine en caractères

const nomComplet = "Dalian Le Boss";
console.log(nomComplet.split(' ')); // decoupe la chaine selon un séparateur (dans ce cas, c'est l'espace) 3 mots

const phrase = "Bonjour, je suis à la maison";
console.log(phrase.split(','));

const region = "hauts-de-france";
console.log(region.split('-'));

document.getElementById("age").innerHTML = `J'ai ${age} ans`;

console.log("=========================");

// decla de tableaux
const fruits = ["mangue", "pastèque", "poire", "orange", "ananas", "pomme", "abricot", "peche"];

// acces a un element du tableau
console.log(fruits);
console.log(fruits[0]); // acces au 1ere element
console.log(fruits[1]); // acces au 2eme element
console.log(fruits[2]); // acces au 3eme element
console.log(fruits[3]); // acces au 4eme element
fruits.unshift("fraise"); // ajout au debut du tableau
console.log(fruits);
fruits.push("banane"); // ajout en fin de tableau
console.log(fruits);
fruits.shift(); // supprimer le 1er element
fruits.pop(); // supprimer le dernier element
console.log(fruits.indexOf("orange")); // retourne l’index de l'element orange
console.log(Array.isArray(fruits)); // true
console.log(fruits);

console.log("=========================");

const personne = {
    prenom: "Julien",
    nom: "La Garde",
    age: 30,
    passions: ["Foot", "Natation", "Jeux Videos"],
    adresse: {
        rue: "Rue Nationale",
        ville: "Lille",
        pays: "France"
    }
};

console.log(personne); // afficher un objet
console.log(personne.prenom); // acces aux attributs de l'objet.acces au prenom
console.log(personne.passions[0]); // acces au 1er element des passions
console.log(personne.passions[2]); // acces au 1er element des passions
console.log(personne.adresse.rue); // acces a la rue (qui est lui meme un attribut de l 'objet adresse')
personne.prenom = "Julie"; // modifie la valeur d'un attribut
console.log(personne.prenom); // afficher la nouvelle valeur
personne.email = "julie@example.com"; // ajout d'un nouvel attribut
console.log(personne); // affiche le nouvel attribut

console.log("=========================");

const todos = [{
        id: 1,
        text: "Faire les courses",
        isCompleted: true,
    },
    {
        id: 2,
        text: "Balade au vieux Lille",
        isCompleted: true,
    },
    {
        id: 3,
        text: "Préparer le diner",
        isCompleted: false,
    },
    {
        id: 4,
        text: "Regarder la TV",
        isCompleted: false,
    },
];
// afficher un tableau d'objets
console.log(todos);
// afficher l'attribut text du 1e r objet du tableau
console.log(todos[0].text);