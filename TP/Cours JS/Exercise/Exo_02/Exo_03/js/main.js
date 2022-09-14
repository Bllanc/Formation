let tabNombres = [12, 02, 05, 09, 41, 56, 78, 36, 54];

//parcourir le tab ==> boucle

// tester si la veleur en cours  = 9
// si oui : on quitte la boucle (et non pas la fonction)
// sinon on affiche la valeur
//fin de boucle

// afficher un message

function trouve(nb, tab) {
  let index = -1;
  for (let i = 0; i < tab.length; i++) {
    // Pour i = 0 , tant que i est inf  a la longueur de tab, on incrémente de 1
    if (tab[i] == nb) {
      // si l'index du tableau est égal au nombre demander
      index = i + 1; // index = i+1
      break; // et on sort de la boucle
    } else {
      // sinon
      document.write(`${tab[i]}<br/>`); // on écrit les chiffres du tableau
    }
  }

  let message =
    index === -1 ? `n'a pas été trouvé` : `existe à la position ${index}`;
  document.write(`le nombre ${nb} ${message} <br/>`);
}
let nombre = prompt("Le nombe recherché");
trouve(nombre, tabNombres);
