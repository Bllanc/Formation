let notes = [14, 13, 12, 05, 27, 01, 08, 25, 75]
let somme = 0;;

for (let i = 0; i < notes.length; i++) { // Pour i = 0 ; tant que i est inf a la longeur du tableau; j'incrémente de 1 valeur
    somme += notes[i]; // sommes = + une valeur du tableau[ i + 1 ] 
}
document.write(`La somme du tableau est :  ${somme} <br>`) // Afficahge sur le body



function calcMoyenne(notes) {
    let m = 0;
    while (m < notes.length) { // Tant que m est inf a la longeur du talbeau 
        somme + notes[m++]; // Je rajoute une note a la valeur de somme  et m +1
    }
    return somme / notes.length; // retour du résultats / par la longeur du tableau 
}
document.write(`La moyenne du tableau est :  ${calcMoyenne(notes)}<br>`) // Affichage sur le body


// Version de Jerome

function testTableau() {
    const tableau = [14, 13, 12, 05, 27, 01, 08, 25, 75];
    let somme = 0;
    let i = 0;
    while (i < tableau.length) { // Tant que i est inf a la longeur du tableau 
        somme += tableau[i++]; // Je rajoute une note a la valeur de somme  et i +1
    }
    document.writeln(`La somme du tableau est : ${somme} <br>`); // Affichage sur le body 
    document.writeln(`La moyenne du tableau est : ${somme/tableau.length} <br>`); // Afficahge sur le body 
}
testTableau();