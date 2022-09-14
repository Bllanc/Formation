let voitures = [
  {
    id: 1,
    marquee: "Mercedes",
    puissances: 10,
  },
  {
    id: 2,
    marquee: "Renault",
    puissances: 8,
  },
  {
    id: 3,
    marquee: "BMW",
    puissances: 12,
  },
  {
    id: 4,
    marquee: "Ferrari",
    puissances: 30,
  },
  {
    id: 5,
    marquee: "Maserati",
    puissances: 20,
  },
];
//  on vous demande d'afficher dans le docuement les marques et les puissances de voitures dont la puissance
//  est superieure ou egale à 10

function verif(vehicule) {
  vehicule.map((voiture) => {
    if (voiture.puissances >= 10) {
      let vroum =
        voiture.puissances >= 10
          ? `La voiture de la marque ${voiture.marquee} a une puissance de ${voiture.puissances}<br/>`
          : ``;
      document.write(vroum);
    }
  });
}

verif(voitures);
