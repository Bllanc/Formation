function nbPair(nb) {
  let tabPair = [];
  let tabImpair = [];
  for (let i = 0; i < nb; i = i + 2) {
    tabPair.push(i);
  }
  for (let i = 1; i <= nb; i = i + 2) {
    tabImpair.push(i);
  }
  document.write(`Chiffre Pair : ${tabPair}<br/> Chiffre Impair : ${tabImpair}`);
}
nbPair(8000);
