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
