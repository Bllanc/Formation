const primes = [
    { id: 1, perf: 10 },
    { id: 2, perf: 56 },
    { id: 3, perf: 41.25 },
    { id: 4, perf: 45 },
    { id: 5, perf: 87.45 },
    { id: 6, perf: 96 },
    { id: 7, perf: 91.13 },
    { id: 8, perf: 82 },
    { id: 9, perf: 52.47 }
]


//pour chacun des employés, calculer sa prime et faire l'affichage suivant:
//id : 1, perf : 23.63, prime : 0
//regle de calcul de prime : 10% si la performance depasse les 50%




/*
primes.map(prime => {
    let msg = "";
    if (prime.perf > 50) {
        msg = `id : ${prime.id} perf : ${prime.perf} prime = 10% <br>`;
    } else {
        msg = `id : ${prime.id} perf : ${prime.perf} prime = 0% <br>`;
    }
    document.write(msg)
});
*/

let tab = primes.map((prime) => document.write(prime.perf > 50 ? `id : ${prime.id} | perf : ${prime.perf} | prime = 10% <br>` : `id : ${prime.id} | perf : ${prime.perf} | prime = 0% <br>`)) // Afficahge dans le body 

console.log(primes.map((prime) => prime.perf > 50 ? `id : ${prime.id} | perf : ${prime.perf} | prime = 10% <br>` : `id : ${prime.id} | perf : ${prime.perf} | prime = 0% <br>`)); // Affichage dans la console