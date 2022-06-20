//chercher une valeur donnée dans un tab, si elle existe, renvoyer sa position( position naturelle), false sinon

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




/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/