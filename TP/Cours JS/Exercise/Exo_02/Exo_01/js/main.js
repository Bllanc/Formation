let moi = ["Allan", "Averlan", 26, "Les Attaques"];
console.log(moi);
console.log(
  `Bonjour je m'apelle ${moi[0]} ${moi[1]}, j'ai ${moi[2]} ans et j'habite ${moi[3]}`
);

const personne = {
  prenom: "Allan",
  nom: "Averlan",
  age: 26,
  passions: ["Lecture", "Jeux-Vidéos", "Séries"],
  adresse: {
    rue: "Chemin latéral",
    ville: "Les Attaques",
    pays: "France",
  },
};

console.log(personne.age);
console.log(personne.passions[1]);
console.log(personne.adresse.rue);
personne.passions[1] = "Musique";
console.log(personne);

/* Changement ligne par ligne */

personne.adresse.rue = "23 Grande Plazza";
personne.adresse.ville = "Rome";
personne.adresse.pays = "Italie";

/* Changement de tout en même temps */
personne.adresse = {
  rue: "23 Grande Plazza",
  ville: "Rome",
  pays: "Italie",
};

console.log(personne);


const todos = [
  {
    id: 1,
    text: "Faire les courses",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Balade au vieux Lille",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Préparer le diner",
    isCompleted: false,
  },
  {
    id: 4,
    text: "Regarder la TV",
    isCompleted: false,
  },
];

todos.push({
  id: todos[todos.length - 1].id + 1,
  text: "reviser JS",
  isCompleted: false,
});

console.log(todos);