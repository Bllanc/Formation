for (let i = 0; i < 10001; i++) {
  document.write(i);
  if (i % 2 == 0) {
    if (i % 22 == 0) {
      document.write("Voila les flics <br>");
    }
    document.write(" est PAIR <br>");
  } else {
    document.write("<br>");
  }
}

/*
Debut
    Pour i <- 0 à 10000 FAIRE
    Ecrire i
        Si i%2 == 0 
        Ecrire "est un chiffre pair"
            Si i%22 == 0 
            Ecire "Voila les flics"
            Fin Si
        Fin Si
        i Suivant
Fin

*/
