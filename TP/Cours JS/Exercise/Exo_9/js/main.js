//ex 1 : écrire une fonction qui remplit un tab de 100 entiers consécutifs [1-100]
//ex 2 : écrire une autre fonction qui affiche les nombre pairs d'un tab de 100 entiers consécutifs (les deux ex sont dependants)

let tab1 = [];

function remplir() {
    for (let i = 0; i <= 100; i++) { // Pour i = 1; i inf à 99; on incrémente de 2
        tab1.push(i); // Push de i dans une variable tableau
    };
    return tab1;
};

function paire() {
    tab1.map((variable) => { // Parcour du tableau tab 1
        if (variable % 2 == 0) { // Si valeur % 2 == 0 alors pair
            document.write(`${variable} | `);
        }
        return variable;
    })

};
remplir();
paire();

document.write(`<br><br>Version de Rayen : <br><br> `);

function nombres() {
    let tab = [];
    for (let i = 0; i <= 100; i++) {
        tab.push(i);
    }
    return tab;
}

function pairs() {
    let tabPairs = nombres();
    let nbPairs = [];
    for (let i = 0; i < tabPairs.length; i = i + 2) {
        nbPairs.push(i);
    }
    return nbPairs;
}

document.write(pairs());







/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/