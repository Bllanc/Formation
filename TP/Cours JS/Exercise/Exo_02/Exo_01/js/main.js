// let moi = ["Allan", "Averlan", 26, "Les Attaques"];
// console.log(moi);
// console.log(
//   `Bonjour je m'apelle ${moi[0]} ${moi[1]}, j'ai ${moi[2]} ans et j'habite ${moi[3]}`
// );

// const personne = {
//   prenom: "Allan",
//   nom: "Averlan",
//   age: 26,
//   passions: ["Lecture", "Jeux-Vidéos", "Séries"],
//   adresse: {
//     rue: "Chemin latéral",
//     ville: "Les Attaques",
//     pays: "France",
//   },
// };

// console.log(personne.age);
// console.log(personne.passions[1]);
// console.log(personne.adresse.rue);
// personne.passions[1] = "Musique";
// console.log(personne);

// /* Changement ligne par ligne */

// personne.adresse.rue = "23 Grande Plazza";
// personne.adresse.ville = "Rome";
// personne.adresse.pays = "Italie";

// /* Changement de tout en même temps */
// personne.adresse = {
//   rue: "23 Grande Plazza",
//   ville: "Rome",
//   pays: "Italie",
// };

// console.log(personne);

// const todos = [
//   {
//     id: 1,
//     text: "Faire les courses",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Balade au vieux Lille",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Préparer le diner",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     text: "Regarder la TV",
//     isCompleted: false,
//   },
// ];

// todos.push({
//   id: todos[todos.length - 1].id + 1,
//   text: "reviser JS",
//   isCompleted: false,
// });

// console.log(todos);

// function somme(a, b) {
//   return a + b;
// }

// function affichageDate() {
//   const date = new Date();
//   document.write(`Nous somme le ${date.toUTCString()}`);
// }
// affichageDate();

// let sommes = (a, b) => a + b;
// console.log(sommes(1, 2));

let eleves = [
  { nom: "Julien", note: "12" },
  { nom: "Stéphane", note: "15" },
  { nom: "Alice", note: "09" },
  { nom: "Paul", note: "11" },
  { nom: "Elise", note: "17" },
];

// eleves.map((eleve) =>
//   document.write(
//     `Nom de l'éléve : ${eleve.nom} || Note de l'éléve : ${eleve.note} <br>`
//   )
// );

for (let i = 0; i < eleves.length; i++) {
  // pour i = 0 , tant que i est inf à la longueur du tableau eleves; i+1
  document.write(`${eleves[i].nom} a une note de ${eleves[i].note}  <br>`); // Affichage du nom et de la note de l'élève.
}
document.write(`<br><br>`);

let i = 0; // Pour i=0
while (i < eleves.length) {
  // pendant que i est inf à la longueur du tableau eleve
  document.write(
    // Afficahge du nom et de la note
    `${eleves[i].nom} a obtenue un score de ${eleves[i].note} <br>`
  );
  i++; // i+1
}

document.write(`<br><br>`);

eleves.forEach(function (eleve) {
  document.write(`${eleve.nom} vient de gagner ${eleve.note} pts <br>`);
});

document.write(`<br><br>`);

eleves.forEach((eleve) =>
  document.write(`${eleve.nom} avec une note de ${eleve.note} <br>`)
);
