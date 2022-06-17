//ecrire une fonction qui retourne les nombre pairs  de 1 à 100 (ordre descendant)

function nbrPairs() {
    let tab = [];
    for (let i = 0; i <= 100; i = i + 2) { // Pour i = 1; i inf à 99; on incrémente de 2
        tab.push(i); // Push de i dans une variable tableau

    };
    return tab; // Le return permet de quitter la fonction
};
let tableau = nbrPairs().reverse(); // Mise du résultats de la fonction en variable
document.write(tableau + ` BOUM`); // Afficahge sur le body