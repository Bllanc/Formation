const notes = [12, 02, 05, 09, 41, 56, 78, 36, 54]
let somme = 0;;

for (let i = 0; i < notes.length; i++) { // Pour i = 0 ; tant que i est inf a la longeur du tableau; j'incrémente de 1 valeur
    somme += notes[i]; // sommes = + une valeur du tableau[ i + 1 ] 
}
document.write(`La somme du tableau est :  ${somme} <br>`) // Afficahge sur le body

function calcMoyenne(notes) {
    let m = 0;
    while (m < notes.length) { // Tant que m est inf a la longeur du tableau 
        somme + notes[m++]; // Je rajoute une note a la valeur de somme  et m +1
    }
    return somme / notes.length; // retour du résultats / par la longeur du tableau 
}
document.write(`La moyenne du tableau est :  ${calcMoyenne(notes).toFixed(2)}<br>`) // Affichage sur le body


// Version de Jerome simplifié
document.write("--------------------------------------<br>");

function testTableau() {
    const tableau = [12, 02, 05, 09, 41, 56, 78, 36, 54];
    let somme = 0;
    let i = 0;
    while (i < tableau.length) { // Tant que i est inf a la longeur du tableau 
        somme += tableau[i++]; // Je rajoute une note a la valeur de somme  et i +1
    }
    document.writeln(`La somme du tableau est : ${somme} <br>`); // Affichage sur le body 
    document.writeln(`La moyenne du tableau est : ${(somme/tableau.length).toFixed(2)} <br>`); // Afficahge sur le body 
}
testTableau();


// 3eme Version
document.write("--------------------------------------<br>");
let tab = [12, 02, 05, 09, 41, 56, 78, 36, 54];

// initialisation : à l'extérieur et avant
let some = 0;

tab.map(
    (nombre) => {
        some += nombre; // some = some + nombre;
    }
);

// utilisation du cumul : à l'extérieur et apres
document.write(`La some du tab est : ${some}, la moyenne est : ${(some / tab.length).toFixed(2)}`);