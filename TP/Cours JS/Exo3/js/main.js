let moyennes = [10, 20, 11, 14, 19, 07, 02, 13, 17, 06];

/*
moyennes.map();
moyennes.map(cb);
moyennes.map(
    () => {

    }
);
*/


/*
let tab = moyennes.map(moyenne => {
    if (moyenne >= 10) {
        document.write("note : " + moyenne + " " + " - L'eleve à reussis. <br>");
    } else {
        document.write("note : " + moyenne + " " + " - L'eleve à échoué. <br>");
    }
});
*/


/*
moyennes.map(moyenne => {
    let msg = "";
    if (moyenne >= 10) {
        msg = "réussis";
    } else {
        msg = "échoué";
    }
    document.write(`Note : ${moyenne}, L'éléve à ${msg} <br>`)
}); 
*/




let tab = moyennes.map((moyenne) => document.write(moyenne >= 10 ? `Note ${moyenne} : -  L'eleve à reussis. <br>` : `Note ${moyenne} : - L'eleve à échoué. <br>`)); // Affichage sur le body.

console.log(moyennes.map((moyenne) => moyenne >= 10 ? `L'eleve à reussis. <br>` : `L'eleve à échoué. <br>`)); // Affichage dans la console.