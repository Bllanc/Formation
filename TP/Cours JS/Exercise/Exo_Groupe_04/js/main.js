//Construire la table de multiplication au format tableau html

document.write("<table>"); // Création du TABLEAU

for (let i = 1; i < 11; i++) { // Pour i =1; i inf à 11, incrémantation de  1
    document.write("<tr>"); // Affichage d'un TR

    for (let j = 1; j < 11; j++) { //Pour j =1; j inf à 11, incrémantation de  1
        if (j == 1 || i == 1) {} // Si j OU i sont égal à 1
        document.write(
            "<td>" + i * j + "</td>"); // Affichage d'un TD avec le résultat de i * j
    }
    document.write("</tr>"); // Fermeture du TR
}

document.write("</table>"); // Fermeture du TABLEAU


/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/