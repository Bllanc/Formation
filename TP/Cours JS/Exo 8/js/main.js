//ecrire une fonction qui retourne les nombre pairs  de 1 à 100 (ordre descendant)

function nbrPairs() {
    let tab = [];
    for (let i = 0; i <= 100; i = i + 2) { // Pour i = 1; i inf à 99; on incrémente de 2
        tab.push(i); // Push de i dans une variable tableau

    };
    return tab.reverse(); // Le return permet de quitter la fonction
};
document.write(nbrPairs() + ` BIM<br>`); // Afficahge sur le body


function nbrPairs2() {
    let tab = [];
    for (let i = 100; i >= 0; i = i - 2) { // Pour i = 1; i inf à 99; on incrémente de 2
        tab.push(i); // Push de i dans une variable tableau

    };
    return tab; // Le return permet de quitter la fonction
};
document.write(nbrPairs2() + ` BAM<br>`); // Afficahge sur le body

function nbPairs3() {
    let tab = [];
    for (let i = 0; i <= 100; i = i + 2) {
        tab.unshift(i);
    }
    return tab;
}
document.write(nbPairs3() + ` BOUM`); // Afficahge sur le body










/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/