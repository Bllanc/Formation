let moyennes = [10, 20, 11, 14, 19, 07, 02, 13, 17, 06];

moyennes.map((moyenne) => document.write(moyenne >= 10 ? `L'eleve à reussis. <br>` : `L'eleve à échoué. <br>`)); // Affichage sur le body.

console.log(moyennes.map((moyenne) => moyenne >= 10 ? `L'eleve à reussis. <br>` : `L'eleve à échoué. <br>`)); // Affichage dans la console.