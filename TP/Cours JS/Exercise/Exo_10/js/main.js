//chercher une valeur donnée dans un tab, si elle existe, renvoyer sa position(position naturelle), false sinon

let tab = [];

function nombres() {
    for (let i = 0; i <= 100; i++) { // Pour i égal 0; tantque i est inf ou égal à 100 ; incrémentation de 1
        tab.push(i); // Push de i dans la variable tab
    }
    return tab; // Le return permet de quitter la fonction
}
nombres();

function checkTab(tabs) {
    return tabs > document.getElementById("tab").value; // Récupération de la valeur mise dans l'input
}

function verif() {
    document.getElementById("resultat").innerHTML = `Son Index est ${tab.find(checkTab)}`; // Cherche dans le tab si la valeur rentrer dans l'input y est contenue et Affiche l'Index ou Undefined
}

document.write(`<br><br>Version de Rayen : <br><br> `);

function recherche(tab, val) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == val) {
            return i + 1;
        }
    }
    return false;
}

let nbTab = [12, 30, 45, 78, 74, 02, 08, 89, 74, 25, 36, 91, 10];
let valeur = 145;

// 1ere solution
// if (recherche(nbTab, valeur) === false) {
//   document.write(`la valeur ${valeur} n'existe pas`)
// }
// else {
//   let position = recherche(nbTab, valeur);
//   document.write(`la valeur ${valeur} se trouve à la position ${position} dans le tableau`)
// }

// simplification
let position = recherche(nbTab, valeur);

// if (position === false) {
//   document.write(`la valeur ${valeur} n'existe pas`)
// }
// else {
//   document.write(`la valeur ${valeur} se trouve à la position ${position} dans le tableau`)
// }

// utilisation du ternaire
// let msg = position === false ? `la valeur ${valeur} n'existe pas` : `la valeur ${valeur} se trouve à la position ${position} dans le tableau`;
// document.write(msg);

document.write(position === false ? `la valeur ${valeur} n'existe pas` : `la valeur ${valeur} se trouve à la position ${position} dans le tableau`);

/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/