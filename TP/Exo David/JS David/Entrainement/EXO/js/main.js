/**
 * Faire une fonction qui permet d'ajouter un contact dans un tableau de contacts
 * Vous allez demander un n° de tél, et le nom et prénom de votre contact.
 *
 * A chaque fin de saisie afficher le tableau de contact en console.
 */

//   let contact = [];
// function gestionnaire() {
//   let tel = prompt(`Votre numéro de téléphone?`);
//   contact.push(tel);
//   console.table(contact);
//   let nom = prompt(`Votre nom ?`);
//   contact.push(nom);
//   console.table(contact);
//   let prenom = prompt(`Votre prénom ?`);
//   contact.push(prenom);
//   console.table(contact);
//   alert(
//     `Nous vous remercions pour vos informations et nous vous rajoutons à notre base de données.`
//   );
// }
// gestionnaire();

let contact = [{}];

function readInfo(infos) {
  return prompt(`Donner moi votre ${infos}`);
}

function gestionnaire() {
  contact[0].tel = readInfo("Tél");
  contact[0].nom = readInfo("Nom");
  contact[0].prenom = readInfo("Prénom");
}
gestionnaire();
console.table([contact])
  
//VERSION DALIAN
 
// function contact () {
//   let renseignement = // Variable temporaire uniquement dans le contact
// {
//   numero : "",
//   prenom : "",
//   nom : ""
// };
//   alert (`Bonjour, veuillez renseigner vos informations s'il vous plait`)

//   renseignement.numero = readInfo(`Votre numéro de téléphone`);
//   renseignement.prenom = readInfo (`Votre nom`);
//   renseignement.nom = readInfo (`Votre prénom`);
//   fiche.push (renseignement) // Push renseignement dans le tableau pour l'afficher
// }
// contact ();
// console.log(fiche); // En extérieur indépendant à la fonction