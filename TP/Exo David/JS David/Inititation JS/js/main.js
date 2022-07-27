// Commentaire sur une ligne

// Les variables

let prenom;

// Affecter une valeur à notre variable
prenom = "Allan";

//Afficher la valeur de la variable dans la console
console.log(prenom);

//Les tpes de variables
//On ne définit pas de type à la création mais il y as quand même un type (variable auto type)
console.log(typeof prenom);

//Déclarer et affecter sur une même ligne
let age = 26;
console.log(age);

// Concaténation de chaînes (se fait par l'intémédiaire de l'opérateur)

//EXO
//Créer une concaténation pour fficher dans la console la phrase suivante:
//Bonjour je m'apelle Allan et j'ai 26 ans.
console.log(`Bonjour je m'appelle ${prenom} et j'ai ${age} ans.`);

//Décrire votre voisin : changer les variables prenom et age puis marquer :
//Mon voisin s'appelle XX et il a XX ans.
prenom = "Dalian dit le Boss";
age = 22;
console.log(`Mon voisin s'appelle ${prenom} et il a ${age} ans.`);

//Les Opérateurs arithmétiques

let nb1 = 10,
  nb2 = 5,
  resultat;

//L'addition

resultat = nb1 + nb2;
console.log("Addition :" + resultat);

// La soustration
resultat = nb1 - nb2;
console.log("Soustraction :" + resultat);

//La Division
resultat = nb1 / nb2;
console.log("Division :" + resultat);

//Le Modulo
resultat = nb1 % nb2;
console.log("Modulo :" + resultat);

//Augmenter une valeurs
nb1 = nb1 + 5;
console.log(nb1);
//On peut simplifier ;
nb1 += 5;

//Incrémentation et Décrémentation

//Incrémentation
nb1 = nb1 + 1;
//On peut simplifier
nb1 += 1;
//mais encore mieux
nb1++;

//Décrémentaion
nb1 = nb1 - 1;
//On peut simplifier
nb1 -= 1;
//mais encore mieux
nb1--;

nb1 = 1;
console.log("nb1 = " + nb1);
console.log(nb1++); // affiche la valeur de nb1 avant incrémentation
console.log("nb1 = " + nb1);

//Les tableaux

//Déclaration d'un tableau numérique (2 façons de faire)
let monTableau = [];
let monTableau2 = new Array();

// Affecter des valeurs à un tableau numérique
monTableau[0] = "Pomme"; // On affecte une valeur à la case en position 0 du tableau
monTableau[1] = "Poire";

//Afficher le contenu du tableau numéique
console.table(monTableau);
console.log(monTableau[0]); //Afficher le premier élements du tableau
console.log(monTableau[1]); // Afficher le 2nd élement du tableau

//Déclarer et affecter en même temps un tableau numérique

let legumes = ["Carote", "Chou", "Navet"];
let legumes2 = new Array("Carote", "Chou", "Navet");

//Réaffecter une valeur à une case d'un tableau numérique
console.log(legumes[2]);
legumes[2] = "Tomate";
console.log(legumes[2]);

// EXO
//Remplacer la carotte par Pommer de terre.
console.table(legumes);
legumes[0] = "Pomme de terre";
console.table(legumes);

//Recupérer la taille d'un tableau
console.log(legumes.length);

//Ajouter un élménent au tableau push()
legumes.push("Poireau"); // Ajoute 1 élément
legumes.push("Courgette", "Potiron", "Aubergine");
console.table(legumes);

// Ajoute à la fin du tableau pop()
legumes.pop();
console.table(legumes);

// Supprimer le 1er element du tableau shift()
legumes.shift();
console.table(legumes);

// Ajout au debut du tableau unshift()
legumes.unshift("Endive");
console.table(legumes);

// La méthode splice() va nous permettre de retirer un ou plusieurs éléments d'un tableau à une possition donnée
//tableau.splice(positionDeDemarrage,nbASupprimer)
legumes.splice(2, 2);
console.table(legumes);

//Nous pouvons aussi ajouter des éléments a une position donnée avec la méthode splice()
legumes.splice(1, 0, "Cornichon");
console.table(legumes);

/* EXO BURGER
On créer un Burger classique 
I - Crée et Afficher ce burger  
II - Enlever les ingédients pour une version Végétarienne, remplacer le steak par un steak Végétale
III - Faire une version Végan
IV - Faire une version Carnivore Supplément 4 steaks
V - Inventer votre formule personnaliser
*/

let burger = [
  "Pain",
  "Salade",
  "Cornichon",
  "Cheddar",
  "Steak",
  "Tomate",
  "Moutarde",
  "Ketchup",
];
console.table(burger);
// II
burger[4] = "Steak Végétale";
console.table(burger);
// III
burger.splice(3, 1);
console.table(burger);
//IV
burger[3] = "Steak";
burger.splice(4, 0, "Steak");
burger.splice(4, 0, "Steak");
burger.splice(4, 0, "Steak");
burger.splice(1, 1);
burger.splice(1, 1);
burger.splice(5, 1);
console.table(burger);
//V
burger.splice(1, 0, "Salade");
burger.splice(2, 0, "Cornichon");
burger.splice(4, 0, "Bacon");
burger.splice(6, 0, "Bacon");
burger.splice(8, 0, "Bacon");
burger.splice(3, 0, "Cheddar");
burger.splice(11, 0, "Cheddar");
burger.splice(3, 0, "Oignon Frit");
console.table(burger);

// Objets

let personne = { nom: "Averlan", prenom: "Allan", age: 26 };
console.table(personne);
console.table(personne.prenom);
personne.prenom = "John";
console.table(personne);
personne.voiture = "Renault";
console.table(personne);

/*EXO
Créez une voiture avec une marque, un modéle, une couleur , un prix
I - Afficher la voiture
II - Changer sa couleur en noir ou blanc (selon la couleur d'origine de votre voiture)
III  - Changer le prix (réduction de 25%)
IV - Ajouter un propriétaire (juste son prénom)
*/
let voiture = {
  marque: "Dodge",
  modele: "Challenger 69",
  coloris: "Grise bande Noir",
  prix: 50000,
};

//I
console.table([voiture]);

// II
voiture.coloris = "Noir bande Blanche";
console.table([voiture]);

//III
let reduc = (voiture.prix / 100) * 25;
voiture.prix = voiture.prix - reduc;
console.table([voiture]);

// IV
voiture.proprietaire = "Allan";
console.table([voiture]);

/* GARAGE
 Vous avez fait une voiture, maintenant faites en 3 nouvelles voitures et inégrez les dans un tableau qui s'appelle : garage
 */
let garage = [
  { marque: "Hyundai", modele: "i-30", coloris: "gris", prix: 3750 },
  { marque: "Fiat", modele: "Panda", coloris: "Blanche", prix: 500 },
  {
    marque: "Mustang",
    modele: "Shelby GT 500 2022",
    coloris: "Jaune",
    prix: 75000,
  },
];
console.table([garage]);

// alert("MAAAAAAAAAAAAAAAAAAARC !")

//   prenom = prompt("Quel est votre prénom ?")
//   console.log(prenom);

/** EXO
 * Demander le prénom et l'age de l'utilisateur et afficher une alert "Bonjour BoB vous avez XX ans"
 */
// prenom = prompt("Indiquer votre prénom");
// age = prompt("Indiquer votre age");
// alert(`Bonjour ${prenom} vous avez ${age}ans`);

/*
 * Les Fontions
 */

//Lorsque les parenthéses d'une fonction sont vides cela signifie qu'elle ne prend pas de paramètre
function hello() {
  alert("Hello, world");
}
// hello();

function bonjour(prenom) {
  alert(`Bonjour ${prenom}`);
}
// bonjour("Patrick");

/*
Exercice
1/ Ecrire une fonction permettant d'effectuer le calcul du perimetre d'un rectangle
Indice : l'équivalent de l'instruction Retourner vue en Algo est l'instruction return en JS

2/ Demander à l'utilisateur de saisir la longueur et la largeur

3/ Appeler la fonction précédemment créée avec les valeurs saisies par l'utilisateur

4/ Afficher le résultat dans la console
*/
// function perimetre() {
//   let longueur = Number(prompt("Quelle est la longueur ?"));
//   let largeur = Number(prompt("Quelle est la largueur ?"));
//   resultat = (longueur + largeur)*2;
//   console.log(`Le périmetre de cet endroit est de ${resultat}m²`);
// }
// perimetre();

/** EXO
 * Commande MacDo
 * Simuler une commande  au Drive :
 *
 * On réutiliseras les burgers que vous avez fait précedemment
 * I - Ecrire une fonction qui demande :
 *      -type de Burger
 *      -accompagnement : Frites, Potatoes, Batonnets de Carottes
 *      -boissons : Coca, Fanta, Minute Maid ou Evian
 *      -dessert : McFlurry,Sundae, Donut
 *
 * II - Stocker le tous dans un tableau  et Afficher le résultat.
 */

function readInfo(infos) {
  return prompt(`${infos}`);
}

// function drive() {
//   alert(`Bonjour et bienvenue chez MacDo`);
//   burger = prompt(`Quel hamburger desirez-vous ?`);
//   let accompagnement = prompt(`Frites ,Potatoes,Carottes ?`);
//   let boissons = prompt(`Vous desirez une boisson ?`);
//   let dessert = prompt(`Une petite douçeur pour faire passer le tout ?`);
//   let commande = [burger, accompagnement, boissons, dessert];
//   console.log(
//     `Votre commande se compose de ${commande} et feras 15.00€ au prochain guichet.Merci !`
//   );
// }
// drive();

// age = Number(readInfo("Age"));
// if (age >= 18) {
//   alert(`Enjoy`);
// } else {
//   alert(`Bye,Bye`);
//   window.location = "http://www.google.fr";
// }

/**********************************
 * Les opérateurs de comparaison
 *
 *      == signifie égal à
 *      Il permet de vérifier que la valeur de deux variables sont identiques
 *
 *      === signifie strictement égal à
 *      Il va comparer la valeur ET le type de deux variables
 *
 *      != signifie différent de
 *      Il permet de vérifier que la valeur de deux variables sont différentes
 *
 *      !== signifie strictement différent de
 *      Il va vérifier si la valeur OU le type sont différents
 *
 * Exemples
 *
 * 1 == 1 --> vrai
 * "1" == 1 --> vrai
 * 1 != 2 --> vrai
 * 1 != "1" --> faux
 * 3 === 3 --> vrai
 * 3 === "3" --> faux
 * 3 !== "3" --> vrai
 * 4 !== 3 --> vrai
 * /
 *
 * * Nous disposons de deux variables email et mdp contenant respectivement l'email et le mot de passe pour accéder à un espace sécurisé
 */
// let email = "contact@teamcalais.fr";
// let mdp = "leLundiAuSoleil";

// /**
//  * 1/ Demander à l'utilisateur de saisir un email et un mot de passe
//  * 2/ Vérifier que l'email est identique à la variable email
//  * 3/ Vérifier que le mot de passe est identique à la variable mdp
//  * 4/ Si OK alors on affiche un message de bienvenue
//  * 5/ Sinon on indique à l'utilisateur l'information incorrecte
//  */

// function connexion() {
//   if (
//     document.getElementById("mail").value == email &&
//     document.getElementById("mdp").value == mdp
//   ) {
//     alert(`Bienvenue ${email}`);
//   } else if (document.getElementById("mail").value != email) {
//     alert(`Adresse mail Incorrect`);
//   } else {
//     alert(`Mot de passe Incorrect`);
//   }
// }

/**
 * EXO Quizz
 * Poser 2 question à l'utilisateur:
 * Si la premiére réponse est fausse ==> Perdu
 * Puis i la deuxiéme réponse est fausse ==> Perdu
 * Si il a bon aux 2 questions ==> Gagné
 */

/********************************
 * Les opérateurs logiques
 *
 * L'opérateur ET : &&
 *
 * Exemple : Tester en même temps si l'email ET le mot de passe sont identiques
 */
// if (userEmail == email && userPwd == mdp) {
// La condition sera remplie si et seulement si les deux tests donnent la valeur VRAI
// Cf table de vérité
//}

// question1 = prompt("Qui a gagné la coupe du monde de football en 1998 ?");
// question2 = prompt("Quel président était en exercice à ce moment là ?");

// if (question1 === reponse1 && question2 === reponse2) {
//   alert("Gagné");
// } else {
//   alert("Perdu");
// }

// let rep1 = "Palpatine";
// let rep2 = "Ben";

// function questionnaire() {
//   let question1 = readInfo("Qui est le grand-pére de Rey Skywalker?");
//   if (question1 == rep1) {
//     let question2 = readInfo("Qui est le fils de Han Solo et de Leia Organa?");
//     if (question2 == rep2) {
//       alert("Winner");
//     } else {
//       alert("Looser");
//     }
//   } else {
//     alert("Looser");
//   }
// }
// questionnaire();

// function questionnaire() {
//   let question1 = readInfo("Qui est le grand-pére de Rey Skywalker?");
//   let question2 = readInfo("Qui est le fils de Han Solo et de Leia Organa?");
//   if (question1 != rep1 || question2 != rep2) {
//     alert("Perdue");
//   } else {
//     alert("Winner");
//   }
// }
// questionnaire();

/****************************
 * L'opérateur NON / CONTRAIRE DE : !F
 */
//  var pause = true;
//  if (!pause) {
//      console.log("Ce n'est pas l'heure de la pause !");
//  }
// équivalent à if(pause == false) { ... }
// différent de
//  if (pause) {
//      console.log("C'est l'heure de la pause !");
//  }
// équivalent à if(pause == true) { ... }

/****************************************************************
 * Les Boucles
 */

// La boucle While : TANT Quel
// let i = 1;

// while (i <= 10) {
//   console.log(`Instruction while écécuté ${i}fois`);
//   i++;
// }

// /****************************************************************
//  * Demander a l'utilisateur de fermé le pont dans la boucle
//  * Une fois le pont fermé réponder Feu Orange Clignotant
//  */

// let pont = "Ouvert";

// while (pont == "Ouvert") {
//   console.log("Feu Rouge");
//   let fermePont = prompt("Voulez-vous fermer le pont ?");
//   if (fermePont.toUpperCase() == "OUI") {
//     alert("Feu Orange Clignotant");
//     pont = "Fermer";
//   }
// }

/**
 * Vous avez une punition a faire :"Je doit participer plus en classe" à faire 100 fois.
 */
// let nb = 1;
// while (nb < 101) {
//   document.write(`${nb} | Je doit participer plus en classe <br>`);
//   nb++;
// }

// // La boucle FAIRE ... TANT QUE : do...while
// do {
//   // A la différence de la boucle while les instructions d'un do while seront éxécutées au moins une fois
//   console.log("Instruction do while exécutée " + i + " fois");
//   i++;
// } while (i <= 10);

// //La boucle For : POUR de
// for (let i = 0; i < 10; i++) {
//   console.log(`Insctruction for exécuté ${i} fois`);
// }

/**
 * Exercice
 * A partir du tableau numérique suivant :
 */
//  let names = ["Jérome", "Valentin", "Yohann", "Emmanuel", "Marina","Allan","Dalian","Thierry","François"];
//  /**
//   * Gràce à une boucle FOR, afficher la liste des prenoms du tableau*/

//  for (let i = 0; i < 1; i++) {
// console.table(`${names}`);
//  }

// /****************
//  * const
//  */
const nbMax = 6;
//  nbMax = 7;

const fruits = ["Pomme"];
// fruits = ["Pomme", "Poire"]; // Syntax error
fruits.push("Poire"); // Possible car on ne "touche" pas à la structure de la constante à savoir un tableau numérique

/*****************
 * .map
 * .find
 * .filter
 */
const vegetables = [

  {
    code: 11,
    name: "Carotte",
    price: 1.99,
  },
  {
    code: 12,
    name: "Poivron vert",
    price: 2.99,
  },
  {
    code: 13,
    name: "Poivron rouge",
    price: 2.99,
  },
  {
    code: 14,
    name: "Chou",
    price: 3.99,
  },
  {
    code: 15,
    name: "Carotte Jaune",
    price: 2.99,
  },

];

//.map
const list_vegetables = vegetables.map(function (vegetable) {
  return `${vegetable.name} pour un prix de ${vegetable.price}`;
});
console.log(list_vegetables);

// Trouver un élément --> .find
// Ne récupére que un seul élément et le premier qu'il trouve avec le même nom

const carotte = vegetables.find(function (vegetable) {
  return vegetable.name.includes("Carotte Jaune");
});
console.log(carotte);


// Trouver tout les éléments --> .filter

const poivron = vegetables.filter(function (vegetable) {
  return vegetable.name.includes("Poivron");
});
console.log(poivron);
