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
// const nbMax = 6;
// //  nbMax = 7;

// const fruits = ["Pomme"];
// // fruits = ["Pomme", "Poire"]; // Syntax error
// fruits.push("Poire"); // Possible car on ne "touche" pas à la structure de la constante à savoir un tableau numérique

// /*****************
//  * .map
//  * .find
//  * .filter
//  */
// const vegetables = [
//   {
//     code: 11,
//     name: "Carotte",
//     price: 1.99,
//   },
//   {
//     code: 12,
//     name: "Poivron vert",
//     price: 2.99,
//   },
//   {
//     code: 13,
//     name: "Poivron rouge",
//     price: 2.99,
//   },
//   {
//     code: 14,
//     name: "Chou",
//     price: 3.99,
//   },
//   {
//     code: 15,
//     name: "Carotte Jaune",
//     price: 2.99,
//   },
// ];

// //.map
// const list_vegetables = vegetables.map(function (vegetable) {
//   return `${vegetable.name} pour un prix de ${vegetable.price}`;
// });
// console.log(list_vegetables);

// // Trouver un élément --> .find
// // Ne récupére que un seul élément et le premier qu'il trouve avec le même nom

// const carotte = vegetables.find(function (vegetable) {
//   return vegetable.name.includes("Carotte Jaune");
// });
// console.log(carotte);

// // Trouver tout les éléments --> .filter

// const poivron = vegetables.filter(function (vegetable) {
//   return vegetable.name.includes("Poivron");
// });
// console.log(poivron);

const dwwmCalais = [
  {
    prenom: "Allan",
    lunettes: true,
    sexe: "M",
  },
  {
    prenom: "Dalian",
    lunettes: true,
    sexe: "M",
  },
  {
    prenom: "Marina",
    lunettes: true,
    sexe: "F",
  },
  {
    prenom: "Emmanuel",
    lunettes: true,
    sexe: "M",
  },
  {
    prenom: "Yohan",
    lunettes: false,
    sexe: "M",
  },
  {
    prenom: "Jérome",
    lunettes: false,
    sexe: "M",
  },
  {
    prenom: "Valentin",
    lunettes: false,
    sexe: "M",
  },
  {
    prenom: "Thierry",
    lunettes: true,
    sexe: "M",
  },
  {
    prenom: "François",
    lunettes: true,
    sexe: "M",
  },
  {
    prenom: "David",
    lunettes: true,
    sexe: "M",
  },
];

// I - Afficher les prénoms.
// II - Trouver la personne de sexe Féminin .
// III - Filtrer les personnes possédant des lunettes.
// IV - Filtrer les personnes qui possédent "MA" dans leurs prenom.
// V - Idem avec "AL".

// I
const list_dwwm = dwwmCalais.map(function (student) {
  return student.prenom;
});
console.table(list_dwwm);

// II
const feminin = dwwmCalais.find(function (student) {
  return student.sexe.includes("F");
});
console.table(feminin);

// III
const lunette = dwwmCalais.filter(function (student) {
  return student.lunettes === true;
});
console.table(lunette);

// IV
const ma = dwwmCalais.filter(function (student) {
  return student.prenom.toLowerCase().includes("ma");
});
console.table(ma);

// V
const al = dwwmCalais.filter(function (student) {
  return student.prenom.toLowerCase().includes("al");
});
console.table(al);

/****************************************************************
 * Fonction féchée => function arrow
 * Pour écrire une fonction fléchée nous allons utiliser un opérateur que l'on appelle fat arrow =>
 */

function addition(nb1, nb2) {
  return nb1 + nb2;
}

const addition2 = function (nb1, nb2) {
  return nb1 + nb2;
};

const addition3 = (nb1, nb2) => nb1 + nb2;
const afficherNombre = (nb1) => console.log(nb1);

afficherNombre(addition(2, 3));
afficherNombre(addition2(5, 7));
afficherNombre(addition3(8, 1));

// Ternaire : ?

let clim = false;

if ((clim = false)) {
  console.log("Oui");
} else {
  console.log("non");
}

// Equivalent avec une ternaire
clim ? console.log("oui") : console.log("non");

// Demandez à l'utilisateur son age : si il a moins de 18 ans affichez mineur sinon afficher majeur
// function verif() {
//   age = Number(prompt(`Qu'elle age avez-vous ?`));
//   age < 18 ? console.log("Mineur") : console.log("Majeur");
// }
// verif();

//Crée 2 fonction qui renvoie vers une autre page : la premiére destiné au mineur : PicWicToys
// la deuxiéme  sur Winamax si majeur

// const redirection = (url) => {
//   return (window.location = url);
// };

// function verif() {
//   age = Number(prompt(`Qu'elle age avez-vous ?`));
//   age < 18
//     ? redirection("https://www.picwictoys.com")
//     : redirection("https://www.winamax.fr");
// }
// verif();

/* Le DOM

  Document Objet Model 
  Jl fournit une représentation du document sous forme d'un arbre et définit la façon dont la structure peut etre manipulée par votre programme (le JS dans notre cas)

  On peut dire qu'il s'aggit d'une sorte de "passerelle" entre le HTML et le JS

  Grace au dom nous allons être en mesure de venir accéder et/ou modifier notre HTML depuis le JS

  Chaque page chargée dans notre navigateur dispose d'un objet "document" utilisable en Js
  Cet objet "document" est notre point d'entrée vers notre contenu HTML

  Comment récupéré les différentes informations de notre HTML ?

  document.getElementById("monId");
Cette méthode va nous permettre de récupérer un élémént HTML à partir de son ID.
Elle prend en paramètre l'ID de l'élement que l'on souhaite récupérer
  
  */

let welcome = document.getElementById("welcome");
console.log(welcome);

/**
 * document.getElementByClassName("maClasse")
 * Cette méthode  va permettre de récupérer un ou plusieurs éléments HTML à partir d'une classe passée en paramétre a la méthode
 */

let data = document.getElementsByClassName("contenue");
console.log(data);
console.log(data[2]);

/**
 * Contrairement a getElementById on récupére un tableau numérique avec nos élements HTML a l'interieur
 * A noter aussi que même si la classe n'est utilisée que sur un élément, la méthode retourneras malgré tout une table
 */

/**
 * document.getElementByTagName("maBalise")
 * Cette méthode va nous permettre de récupérer un ou plusieurs  éléments HTML à partir du nom de la balise
 */

let divs = document.getElementsByTagName("div");
console.log(divs);

// Récupéré le lien de google
let google = document.getElementById("googleLink");
console.log(google);

/**
 * Nous allons pouvoir accéder au infos de ce lien à partir de l'élément recupéré
 */

// ou memmene le lien
console.log(google.href);

// l'ID de l 'éléments
console.log(google.id);

// contenue de l' élément
console.log(google.textContent);

// classe de l' éléments
console.log(google.className);

/**
 * Comme a une variable "classique" on va pouvoir réaffecter une nouvelle valeur a la propriété souhaité
 */

google.textContent = "Mon lien vers Google";

data[0].innerHTML = "<img src='img/mooncake.png' alt='Une image'/>";

/**
 * Ajouter un élément
 */

// réation de l'élément (m"thode create sur l'objet document)

let p = document.createElement("p");
// II - définir l'élément
p.id = "newParagraphe";
p.textContent = "Mon Paragraphe crée en JS";
// III - Ajouter a l'élément dans HTML
data[1].appendChild(p);

// p.style.color="green";

/** Dans un soucis de respect de la séparation des concepts nous éviterons au maximum de manipuler les styles de cette façon. En effet nous privilégirons l'utilisation des classes pour ajouter au supprimer des styles */

p.classList.add("color-red", "text-uppercase"); // Ajoute une ou plusieurs class
p.classList.remove("text-uppercase"); // Retire une ou plusieurs class

/**
     * Les événements
     * 
     * 
     * Les événements vont nous permettre de déclencher une fonction (une série d'instructions) suite à une intéraction/action de l'utilisateur
     * 
     * Notre objectif : Etre en mesure de capter/capturer ces évenemnts, afin d'exectuter une fonction
     * 
     * Nous allons trouver plusieurs types d'évenements
     * 
     * -les éveneements à la souris
     *       *click --> au clic sur un élément
     *       *mouseenter --> au survol d'un élément
     *       *mouseleave ---> lorsque l'on quitte le survol d'un élément
     * 
     * -les événements au clavier
     *       *keydown --> une touche du clavier est enfoncée
     *       *keyup --> une touche de clavier est relachée
     * 
     * -les évenements sur la fenêtre
     *       *scroll --> défilement de la fenêtre
     *       *resize --> redimentionnement de la fenêtre
     * 
     * - Les événement sur un formulaire
     *       * change ---> auchangement de valeur pour les éléménts <input>,<select>, <textarea>
     *       * submit ---> avant l'envoi du formulaire
     * 
     * - Les événement sur le DOM
     *       * DOMContentLoades --> lorsque le document HTML est complèment chargé
     * 
     *************************************************************************************************************************************

     Les écouteurs d'éveneemnts

     Nous allons avoir besoin d'"attacher" un événement à un élémént ou autrement dit déclarer un écouteur d'éveneement qui se chargera de lancer une action lorsque l'évenemnt se produira --> cette action sera une fonction (cette fonction sera à l'intérieur d'une autre fonction et noux appellerons donc cette fonction une fonction callback)
     *
     *
     * La fonction que nous allons utiliser pour déclarer un écouteur d'evement est addEventListener
     * 
     * elmeent.addEventListener("type d'évenemnt", fonction de callback ou nom d'une fonction existante)
     * 
     * Exemple : AU clic sur le paragraphe portant d'id welcome, afficher le textez en jaune
     * 
     * 1/ Onrécupère l'élément sur lequel nous allons attacher l'écouteur d'éveneement dans l'étape 3
     */
let bienvenue = document.getElementById("welcome");
//2/ On détermine une fonction en mesure de réaliser l'action demandée

function changeColor() {
  if (bienvenue.style.color == "gold") {
    bienvenue.style.color = "black";
  } else {
    bienvenue.style.color = "gold";
  }
}

//  bienvenue.addEventListener("click", changeColor);

// Posssible de passer directement par une fonction de CallBack
bienvenue.textContent = "Bienvenue sur notre site ";
bienvenue.addEventListener("click", () => {
  if (bienvenue.style.color == "gold") {
    bienvenue.style.color = "black";
  } else {
    bienvenue.style.color = "gold";
  }
});

/**
 * Exercice
 *
 * En JS uniquement
 * 1/ créer un champ input
 * ajouter un type text à ce champ
 * ajouter id à ce champ (ex: monInput)
 * ajouer le champ au document HTML
 * ajouter dans une alerte la saisie de l'utilisateur dès que quelquechose est saisie
 *
 */

let input = document.createElement("input");
input.type = "text";
input.id = "monInput";
data[2].appendChild(input);
input.addEventListener("change", () => {
  alert(input.value);
});

/**
 * querySelector
 *
 * Cette méthode, toujours sur l'objet document, retourne le premier élément dans le document HTML correspondant au sélecteur spécifié ou null si aucune correspondance n'est trouvée.
 */
let element = document.querySelector(".contenu");
console.log(element);

/*Cette méthode, toujours sur l'objet document, retourne tous éléments dans le document HTML correspondant au sélecteur spécifié ou null si aucune correspondance n'est trouvée.
 */
let elements = document.querySelectorAll(".contenu");

console.log(elements);

/**
 * La méthode preventDefault sur l'objet event
 *
 * Elle va nous permettre d'indiquer que nous ne souhaitons pas que l'action par défaut soit prise en compte.
 *
 *
 * La fonction de callback passée en paramètre d'addEventListener peut prendre un paramètre.
 * Ce paramètre représente l'objet event.
 * il est généralement nommé e, evt ou event
 *
 * La methode preventDefault de cet odjet récupéré en paramètre permet d'empêcher le navigateur de déclencher son comportement par défaut.
 *
 * Exemple: empêcher l'utilisateur d'allert sur Google au clic sur le lien portant l'id googleLink
 */

let googleLink = document.querySelector("#googleLink");
googleLink.addEventListener("click", (e) => {
  // annuler le comportement par défaut
  e.preventDefault();

  alert("VOUS NE PASSSEREZ PAS !");

  console.log(e.target);
  console.log(e.target.classList);
});
