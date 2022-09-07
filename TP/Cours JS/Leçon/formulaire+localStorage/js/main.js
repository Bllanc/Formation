let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let msg = document.querySelector(".msg");
let ul = document.querySelector("#users");
document.querySelector("#users").innerHTML = localStorage.getItem("users");

const myForm = document.querySelector("#my-form");
myForm.addEventListener("submit", onSubmit);

suppression();

function onSubmit(e) {
  e.preventDefault();

  // cas d'erreur
  if (nameInput.value === "" || emailInput.value === "") {
    msg.innerHTML = " Merci de compléter tous les champs";
    msg.classList.add("error");

    setTimeout(() => {
      msg.innerHTML = "";
      msg.classList.remove("error");
    }, 2000);
  } // cas pas d'erreur
  else {
    //let li = document.createElement("li");
    //let liTexte = document.createTextNode(`${nameInput.value} : ${emailInput.value}`);
    //li.appendChild(liTexte);
    // eq aux deux lignes precedentes
    //  li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    // cette ligne est équivalente à la ligne precedente (autre façon de faire)
    //  li.innerHTML = `<strong>${nameInput.value}</strong> :  ${emailInput.value}`;
    //ul.appendChild(li);
    // cette ligne est équivalente aux deux precedentes
    //ul.innerHTML += `<li><strong>${nameInput.value}</strong> :  ${emailInput.value}</li>`;

    //stocker
    // localStorage.setItem("cle", "valeur");
    // recuperer
    // localStorage.getItem("cle");

    // 1- recupérer les données du ls
    // 2- ajouter un nouvel element aux données récupérées
    // 3- enregistrer les données dans le ls (y compris le nouveau)
    // 4- actualiser le visuel

    // 1 -
    let users =
      localStorage.getItem("users") !== null
        ? localStorage.getItem("users")
        : "";

    // 2-
    users += `<li><strong>${nameInput.value}</strong> :  ${emailInput.value}</li>`;

    // 3-  écraser l'ancien contenu du ls
    localStorage.setItem("users", users);

    //4 -
    ul.innerHTML = users;

    suppression();

    nameInput.value = "";
    emailInput.value = "";
  }
}
function suppression() {
  //   //    if (!document.querySelector(".suppression")) == false  //  document.querySelector(".suppression") renvoie null
  // dans un contexte booleen, null ets evaluée à false (utiliser le == et non pas ===)

  if (!document.querySelector(".suppression")) {
    if (localStorage.getItem("users") !== null) {
      let button = document.createElement("span");
      button.innerHTML = "<a class='btn suppression'>supprimer </a>";
      myForm.appendChild(button);
      button.addEventListener("click", () => {
        localStorage.removeItem("users");
        ul.innerHTML = "";
        myForm.removeChild(button);
      });
    }
  }
}
