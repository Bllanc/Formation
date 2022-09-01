//Construire la table de multiplication au format tableau html

function multiplication() {
    document.write(`
    <table>`);
    for (let i = 1; i <= 10; i++) {
        document.write(`<tr>`);
        for (let j = 1; j <= 10; j++) {
            document.write(`<td>${i * j}</td>`)
        }
        document.write(`</tr>`);
    }
    document.write(`</table>`);
}
multiplication();

document.write(`========================================================================================================`);

function multiplication2() {
    let html = ``;
    html += `<table>`;
    for (let i = 1; i <= 10; i++) {
        html += `<tr>`;
        for (let j = 1; j <= 10; j++) {
            html += `<td>${i * j}</td>`;
        }
        html += `</tr>`;
    }

    html += `</table>`;
    //console.log(html);
    return html;
}

document.write(multiplication2());




/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/