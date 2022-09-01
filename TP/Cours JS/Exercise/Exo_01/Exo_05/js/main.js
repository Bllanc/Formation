//afficher les villes dont le nb d'habitants depasse 1000000 (1 million)en utilisant la boucle forEach

let villes = [
    { id: 1, nom: "Paris", nbHabitants: 12365541 },
    { id: 2, nom: "Lille", nbHabitants: 1051609 },
    { id: 3, nom: "Toulon", nbHabitants: 575347 },
    { id: 4, nom: "Marseille", nbHabitants: 1614501 },
    { id: 5, nom: "Nice", nbHabitants: 942886 },
    { id: 6, nom: "Cannes", nbHabitants: 74545 },
    { id: 7, nom: "Toulouse", nbHabitants: 1035280 }
];

villes.forEach(function(ville) {
    if (ville.nbHabitants > 1000000) { // Si nbHabitants est sup a 1.000.000
        document.write(`${ville.id} ville  | Nom : ${ville.nom} | NbHabitants :  ${ville.nbHabitants} <br>`); // Alors j'écrit les villes sur le body
    } else { // Sinon rien

    };
});

document.write("====================================== <br>")

villes.forEach(function(ville) {
    let populase = ville.nbHabitants > 1000000 ? `${ville.id} ville  | Nom : ${ville.nom} | NbHabitants :  ${ville.nbHabitants} <br>` : ``;
    document.write(populase);
});

document.write("====================================== <br>")




/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/