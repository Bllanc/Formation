//ecrire une fonction qui retourne les nombre impairs

//La portée c'est le niveaux de visibilité d'une variable.

function nbrImpaire() {
    let tab = [];
    for (let i = 1; i <= 99; i = i + 2) { // Pour i = 1; i inf à 99; on incrémente de 2
        tab.push(i); // Push de i dans une variable tableau
    };
    return tab; // Le return permet de quitter la fonction
};
let tableau = nbrImpaire(); // Mise du résultats de la fonction en variable
document.write(tableau); // Afficahge sur le body


/*
for et while on controle le nombre d'itération, le début et la fin
alors qu'avec
forEach et map on ne controle rien
*/