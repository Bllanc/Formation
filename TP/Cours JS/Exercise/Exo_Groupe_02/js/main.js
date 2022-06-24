// déterminer la voiture et la puissance minimale(voitur et puissance) et la maxiamle, la moyenne des puissances
// afficher les info dans un tableau(tableau html)

const vehicules = [
    { id: 1, marque: "Abarth", puissance: 10 },
    { id: 2, marque: "Audi", puissance: 12 },
    { id: 3, marque: "Bitter", puissance: 52 },
    { id: 4, marque: "Bristol", puissance: 14 },
    { id: 5, marque: "Cadillac", puissance: 30 },
    { id: 6, marque: "Dacia", puissance: 16 },
    { id: 7, marque: "Fiat", puissance: 8 },
    { id: 8, marque: "Holden", puissance: 9 },
    { id: 9, marque: "Imperial", puissance: 5 },
    { id: 10, marque: "Jaguar", puissance: 22 },

]

function recherche(tabvehicules) {
    let moyenne = 0;
    let somme = 0
    let puissanceMax = 0;
    let puissanceMin = 0;
    let marquePuissanceMax = "";
    let marquePuissanceMin = "";
    tabvehicules.map(((vehicule) => { // MAP pour pacourir la variable vehicules
        somme = somme + vehicule.puissance // Calcul de la puissance Total // Ajoute chaque puissance de chaque vehicule

        if (vehicule.puissance > puissanceMax) { // Si vehicule.puissance et sup a la valeur puissanceMax
            puissanceMax = vehicule.puissance; // J'écrase la valeur pour la remplacer par la plus haute valeur
            marquePuissanceMax = vehicule.marque // Je récupere la marque en même temps que la plus haute valeur
        };
        if (vehicule.puissance < puissanceMin) { // Si vehicule.puissance et inf a la valeur puissanceMin
            puissanceMin = vehicule.puissance; //J'écrase la valeur pour la remplacer par la plus petite valeur
            marquePuissanceMin = vehicule.marque // Je récupere la marque en même temps que la plus petite valeur
        };
        if (puissanceMin == 0) { // Prendre la premiére valeur par défaut
            puissanceMin = vehicule.puissance;
        };
    }));
    moyenne = somme / tabvehicules.length;
    return { puissanceMax, puissanceMin, marquePuissanceMax, marquePuissanceMin, moyenne, somme }; // retour de chaque valeur enregistrer
};

let { puissanceMax, puissanceMin, marquePuissanceMax, marquePuissanceMin, moyenne, somme } = recherche(vehicules);
document.write(`<table>
<tr>
<td></td>
<td>Marque</td>
<td>Puissance</td>
</tr>
<tr>
<td>La plus Puissante</td>
<td>${marquePuissanceMax}</td>
<td>${puissanceMax}</td>
</tr>
<tr>
<td>La moins Puissante</td>
<td>${marquePuissanceMin}</td>
<td>${puissanceMin}</td>
</tr>
<tr>
<td>Moyenne des Puissances</td>
<td colspan="2">${moyenne}</td>
</tr>
<tr>
<td>Somme des Puissances</td>
<td colspan="2">${somme}</td>
</tr>
</table>`)

// document.getElementById("ph").innerHTML = (puissanceMax); // Affichage dans le tableau 
// document.getElementById("mh").innerHTML = (marquePuissanceMax); // Affichage dans le tableau 
// document.getElementById("pb").innerHTML = (puissanceMin); // Affichage dans le tableau 
// document.getElementById("mb").innerHTML = (marquePuissanceMin); // Affichage dans le tableau 
// document.getElementById("moy").innerHTML = (moyenne); // Affichage dans le tableau 
// document.getElementById("som").innerHTML = (somme); // Affichage dans le tableau 


/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/