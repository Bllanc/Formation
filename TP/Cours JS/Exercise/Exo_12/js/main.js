//Créer une fonction qui retourne la valeur min et  max dans un tab de nombres

let tabNb = [48, 78, 52, 1256, 33, 41, 79, 20, 10, 6, 86, 8347, 99, 253, 278, 856]; // Tableau avec des chiffres Aléatoires.

function maxI(tabNb) {
    let nbMaxi = tabNb[0], // Variable mise à la premiére valeur du tableau.
        nbMin = tabNb[0]; // Variable mise à la premiére valeur du tableau.
    for (let i = 1; i < tabNb.length; i++) { // Pour i = 1 ; tant que i est inf à la longueur du tab; incrémentation de i.
        if (tabNb[i] > nbMaxi) { // Si tabNb[i] est sup nbMaxi.
            nbMaxi = tabNb[i]; // alors on écrase la valeur de i jusqua ce que la plus grande valeur soit atteinte.
        };
        if (tabNb[i] < nbMin) { // Si tabNb[i] est inf nbMin.
            nbMin = tabNb[i]; // alors on écrase la valeur de i jusqua ce que la plus petite valeur soit atteinte.
        }
    };
    return [nbMaxi, nbMin]; // Retour sous forme de tableau
    //return {nbMaxi,nbMin} // Retour sous forme d'objet
};
let [nbMaxi, nbMin] = maxI(tabNb);
//let { nbMaxi, nbMin } = maxI(tabNb);
document.write(`La valeur min est ${nbMin} est la valeur max est ${nbMaxi}<br>=======================<br>`); // Affichage sur le body du nombre min et max.


/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/