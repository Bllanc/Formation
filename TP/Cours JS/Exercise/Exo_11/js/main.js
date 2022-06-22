//créer une fonction qui cherche la valeur max dans un tab de nombres

let tabNb = [48, 78, 52, 1256, 33, 41, 79, 20, 10, 6, 86, 8347, 99, 253, 278, 856]; // Tableau avec des chiffres Aléatoires.

function maxi(tabNb) {
    return Math.max.apply(null, tabNb); // retourne le chiffre maximum dans le tableau tab. apply permet d'utiliser le tableau tabNb
}
let maxNb = maxi(tabNb); // Enregistrement de la fonction.

document.write(`La valeur max est ${maxNb}<br>=======================<br>`); // Affichage sur le body du nombre max.


let nbMax = tabNb[0]; // On se met a la premiére position dans le tableau.

for (let i = 1; i < tabNb.length; i++) { // Pour i = 1 ; tant que i est inf à la longueur du tab; incrémentation de i.
    if (tabNb[i] > nbMax) { // Si tabNb[i] est sup nbMax.
        nbMax = tabNb[i]; // alors on écrase la valeur de i jusqua ce que la plus grande valeur soit atteinte.
    };
};

document.write(`La valeur max est ${nbMax}<br>=======================<br>`); // Affichage sur le body du nombre max.

function maxI(tabNb) {
    let nbMaxi = tabNb[0]; // On se met a la premiére position dans le tableau.
    for (let i = 1; i < tabNb.length; i++) { // Pour i = 1 ; tant que i est inf à la longueur du tab; incrémentation de i.
        if (tabNb[i] > nbMaxi) { // Si tabNb[i] est sup nbMaxi.
            nbMaxi = tabNb[i]; // alors on écrase la valeur de i jusqua ce que la plus grande valeur soit atteinte.
        };
    };
    return nbMaxi;
};
let nbMaxis = maxI(tabNb);
document.write(`La valeur max est ${maxI(tabNb)}<br>=======================<br>`); // Affichage sur le body du nombre max.


/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/