let villes = [
  { id: 1, nom: "Paris", nbHabitants: 12365541 },
  { id: 2, nom: "Lille", nbHabitants: 1051609 },
  { id: 3, nom: "Toulon", nbHabitants: 575347 },
  { id: 4, nom: "Marseille", nbHabitants: 1614501 },
  { id: 5, nom: "Nice", nbHabitants: 942886 },
  { id: 6, nom: "Cannes", nbHabitants: 74545 },
  { id: 7, nom: "Toulouse", nbHabitants: 1035280 },
];

// afficher les villes dont le nb d'habitants depasse 1000000 (1 million)
// en utilisant la boucle forEach

function search(endroits) {
  endroits.forEach((ville) => {
    if (ville.nbHabitants > 1000000) {
      let pop =
        ville.nbHabitants > 1000000
          ? `La ville de ${ville.nom} dépasse le million d'habitants (${ville.nbHabitants})<br>`
          : ``;
      document.write(pop);
    }
  });
}
search(villes);
