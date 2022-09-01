// on vous demande d'écrire une fonction qui retourne le pourcentage de la prime en fonction de la performance 
// en suivant les regles ci-dessous
// performance
// 70 - 75 ==> 10 %
// 76 - 80 ==> 15 %
// 81 - 85 ==> 18 %
// 86 +  ==> 20 %

const primes = [
    { id: 1, perfMin: 70, perfMax: 75, primes: 10 },
    { id: 2, perfMin: 76, perfMax: 80, primes: 15 },
    { id: 3, perfMin: 81, perfMax: 85, primes: 18 },
    { id: 4, perf: 86, primes: 20 }
]
let msgMin = "";
let msgMed = "";
let msgHaut = "";
let msgSup = "";

function calcPrime(primes) {
    primes.map(prime => {
        if (prime.perfMin >= 70 && prime.perfMax <= 75) {
            msgMin = `id : ${prime.id} Perfromance entre : ${prime.perfMin} et ${prime.perfMax} prime : ${prime.primes} %<br>`;
        }
        if (prime.perfMin >= 76 && prime.perfMax <= 80) {
            msgMed = `id : ${prime.id} Perfromance entre : ${prime.perfMin} et ${prime.perfMax} prime : ${prime.primes} %<br>`;
        }
        if (prime.perfMin >= 81 && prime.perfMax <= 85) {
            msgHaut = `id : ${prime.id} Perfromance entre : ${prime.perfMin} et ${prime.perfMax} prime : ${prime.primes} %<br>`;
        }
        if (prime.perf >= 86) {
            msgSup = `id : ${prime.id} Perfromance supérieure à ${prime.perf} prime : ${prime.primes} %<br>`;
        }
    });
    return [msgMin, msgMed, msgHaut, msgSup];
};
document.write(calcPrime(primes));

document.write("<br> |===============|CORRECTION|===============| <br>")

function prime(perf) {
    switch (true) {
        case perf >= 70 && perf <= 75:
            return 10;
            //break; // break dans ce cas n'est pas obligatoire, il vient apres un return
        case perf >= 76 && perf <= 80:
            return 15;
        case perf >= 81 && perf <= 85:
            return 18;
        case perf >= 86:
            return 20;
        default:
            return 0;
    };
};

let primePourc = prime(84);
document.write(primePourc);



/* SIMPLIFICAION
function prime2(perf) {
  switch (true) {
    case perf >= 86:
      return 20;
    // implicitement  perf<86 <=>   perf<=85
    case perf >= 81:
      return 18;
    case perf >= 76:
      return 15;
    case perf >= 70:
      return 10;
  }
  return 0;
}

console.log(prime2(-20));
*/





/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/