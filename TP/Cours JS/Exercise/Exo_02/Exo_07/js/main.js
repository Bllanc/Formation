function nbPair(nb) {
  let tabPair = [];

  for (let i = 2; i < nb; i = i + 2) {
    tabPair.push(i);
  }

  return tabPair;
}
let aff = nbPair(100).reverse();
console.log(aff);


function nbPairs(nb) {
  let tabPair = [];

  for (let i = 2; i < nb; i = i + 2) {
    tabPair.unshift(i);
  }

  return tabPair;
}
let affi = nbPairs(100);
console.log(affi);