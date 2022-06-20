//ex 1 : écrire une fonction qui remplit un tab de 100 entiers consécutifs [1-100]
//ex 2 : écrire une autre fonction qui affiche les nombre pairs d'un tab de 100 entiers consécutifs (les deux ex sont dependants)

let tab1 = [];

function remplir() {
    for (let i = 0; i <= 100; i++) { // Pour i = 1; i inf à 99; on incrémente de 2
        tab1.push(i); // Push de i dans une variable tableau
    };
};

function paire() {
    tab1.map((variable) => {
        if (variable % 2 == 0) { // Si valeur % 2 == 0 alors pair
            document.write(variable);
        }
    })
};
remplir();
paire();

/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/