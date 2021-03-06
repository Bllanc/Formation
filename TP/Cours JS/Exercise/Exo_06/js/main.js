let voitures = [{
        id: 1,
        marque: "Mercedes",
        puissances: 10,
    },
    {
        id: 2,
        marque: "Renault",
        puissances: 8,
    },
    {
        id: 3,
        marque: "BMW",
        puissances: 12,
    },
    {
        id: 4,
        marque: "Ferrari",
        puissances: 30,
    },
    {
        id: 5,
        marque: "Maserati",
        puissances: 20,
    },
];
//on vous demande d'afficher dans le docuement les marques et les puissances de voitures dont la puissance est superieure ou egale à 10

voitures.map(voiture => {
    let msg = "";
    if (voiture.puissances >= 10) { // Si voiture.puissance sup ou égal à 10
        msg = `Marque : ${voiture.marque} | Puissance :${voiture.puissances} <br>`; // Alors on affiche ce message
    }
    document.write(msg);

});

document.write("=========================== <br>")

let tab = voitures.map((voiture) => document.write(voiture.puissances >= 10 ? `Marque : ${voiture.marque} | Puissance :${voiture.puissances} <br>` : ``)); // Afficahge dans le body

document.write("=========================== <br>")

/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/