let tab = [12, 02, 05, 09, 41, 56, 78, 36, 54];
let somme = 0;
let moyenne = 0;

// Ecrire une fonction  qui permet de calculer la somme et la moyene d'un tableau (elle renoive ces 2 valeurs)

function calcul(tab) {
  for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
    moyenne = somme / tab.length;
  }
  return [somme, moyenne];
  // return {"somme" : somme, "moyenne" : moyenne} retour d'un objet
}
calcul(tab);

function affichage() {
  document.write(
    `La somme du tableau est ${somme} avec une moyenne de ${moyenne.toFixed(2)}`
  );
}

affichage();
