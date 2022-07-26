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
