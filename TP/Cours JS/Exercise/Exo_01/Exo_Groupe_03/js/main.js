//Ecrire une fonction qui détermine le nombre d'heures et minutes à partir du nombre de minutes

// function nbHM(mn) {
//     let h = parseInt(mn / 60);
//     let m = mn % 60;
//     return { h, m };
// }

// document.write(`${nbHM(70).h} heures et ${nbHM(70).m}minutes `);

function nbHM(mn) {
    return [parseInt(mn / 60), mn % 60, parseInt(mn / 3600)];
}
let [h, m, s] = nbHM(8290);

document.write(`${h} heures et ${m} minutes  et ${s} secondes`);

/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/