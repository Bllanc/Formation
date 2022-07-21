let notes = [];

function affichage() {
    let html = ``;
    let moyenne = 0;
    let somme = 0;
    for (let i = 0; i < 8; i++) {
        let result = prompt(`Écrire la note de l'élève n° ${i} (../20)`);
        notes.push(result);;
        somme = parseInt(somme) + parseInt(notes[i]);
        html += `La note de l'élève n° ${i} est de  ${result}/20<br>`;
    }
    moyenne = somme / notes.length;
    html += `La moyenne est de ${moyenne.toFixed(2)}/20`;
    return html;
}
document.write(affichage(notes));