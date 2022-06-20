//ex 1 : écrire une fonction qui remplit un tab de 100 entiers consécutifs [1-100]
//ex 2 : écrire une autre fonction qui affiche les nombre pairs d'un tab de 100 entiers consécutifs (les deux ex sont dependants)

let tab1 = [];
let tab2 = [];

function remplir() {
    for (let i = 0; i <= 100; i++) { // Pour i = 1; i inf à 99; on incrémente de 2
        tab1.push(i); // Push de i dans une variable tableau

    };
    for (let tab1 = 0; tab1 <= 100; tab1 = tab1 + 2) {
        tab2.push(tab1); // Push de i dans une variable tableau

    }
    return tab1 + tab2; // Le return permet de quitter la fonction
};
document.write(`${remplir()}<br>`); // Afficahge sur le body






/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/