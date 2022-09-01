//déterminer le type de vehicle en fonction du nombre de roues
// 2 : moto
// 4 : voiture
// 6 : camion
// autre sinon

function roueNb(roue) {
    switch (roue) {
        case 2:
            return "Moto";
        case 4:
            return "Voiture";
        case 6:
            return "Camion";
    };
    return "Autre";
};

document.write(roueNb(2));

/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/