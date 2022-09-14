// ECRIRE UNE FONCTION QUI CHERCHE LA VALEUR MAX DANS UN TABLEAU DE NOMBRES

const tabNb = [89, 12, 05, 30, 65, 79, 24, 11, 99, 856];

function maxi(tabNb) {
  let nbMax = tabNb[0];
  let nbMin = tabNb[0];
  for (let i = 0; i < tabNb.length; i++) {
    if (tabNb[i] > nbMax) {
      nbMax = tabNb[i];
    }
    if (tabNb[i] < nbMin) {
      nbMin = tabNb[i];
    }
  }
  return [nbMax, nbMin];
}

let [nbMax, nbMin] = maxi(tabNb);
console.log("====================================");
console.log(
  `La valeur min est ${nbMin} est la valeur max est ${nbMax}<br>=======================<br>`
);
console.log("====================================");
