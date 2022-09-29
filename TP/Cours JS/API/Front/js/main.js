// initialisation
$(".contenu").hide();
$("section[data-cible=tab-bord ]").show();

$(document).on("click", ".nav-link", function (e) {
  e.preventDefault();
  $(".contenu").hide();
  // recupérer la valeur de l'attribut data du lien
  let valeurSource = $(this).data("source");
  // chercher la div dont la'ttribut data a cette valeur et l'afficher
  $("section[data-cible='" + valeurSource + "']").show();
});
// gestion des evenements
$(document).on("click", "a[data-source=liste]", affichage);
$(document).on("click", ".supp", suppression)
$(document).on("click", "section[data-cible=nouveau] button[type=submit]", ajout)
$(document).on("click", ".maj", modif);
$(document).on("click", "section[data-cible=modif] button[type=submit]", maj)

// les fonctions

function ajout(e) {
  /* 
  formulaire dans le html (section "nouveau")
  recupérer les valeurs des inputs
  les mettre au type json
  requete ajax, 
  type POST
  url : "http://localhost:3000/contacts"
  data :  json qui contient les données
  type json
  */

  e.preventDefault();
  let donnees = {
    "id": Date.now(),
    "nom": $("#nom").val(),
    "prenom": $("#prenom").val(),
  }


  let request = $.ajax({
    type: "POST",
    url: "http://localhost:3000/contacts",
    data: donnees,
    dataType: "json",
  });

  request.done(function (response) {

    $("#nom").val("");
    $("#prenom").val("");

    let htmlNotif = `
      <button type="button" class="btn btn-primary d-none" id="liveToastBtn">Show live toast</button>

      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="liveToast">
        <div class="toast-header">
          <strong class="me-auto">Création du contact réussie</strong>
          <small>${response.id}</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          <b>ID : </b> ${response.id} <br>
          <b>Nom :</b> ${response.nom}<br>
          <b>Prénom :</b> ${response.prenom}<br>
          <div class="mt-2 pt-2 border-top">
            <button type="button" class="btn btn-primary btn-sm liste">Liste des contacts</button>
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Fermer</button>
          </div>
        </div>
      </div>
    `;
    $(".notif").html(htmlNotif);
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
      toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample, { autohide: false });
        toast.show()
      })
    }
    $("#liveToastBtn").trigger("click");
    $(document).on("click", "button.liste", function (e) {
      $(".notif").html("");
      $("a[data-source=liste]").trigger("click");
    })
  });

  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });



}

function affichage(e) {
  e.preventDefault();
  let request = $.ajax({
    type: "GET",
    url: "http://localhost:3000/contacts",
    dataType: "json",
  });

  request.done(function (response) {
    let html = "";
    if (response.length === 0) {
      html = `<h2 class="py-4 h1 ">Aucun contact n'a été trouvé.  </h2>`;
    }
    else {
      html += `
    <h2 class="py-4 h1 ">Liste des contacts </h2>
    <table class="table table-striped ">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Nom</th>
          <th scope="col">Prénom</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>`;

      response.map(
        function (contact) {
          html += `
        <tr>
          <th scope="row">${contact.id}</th>
          <td>${contact.nom}</td>
          <td>${contact.prenom}</td>
          <td>
            <button type="button" data-id="${contact.id}" class="btn btn-info text-white maj"><i class="fa-solid fa-pen-to-square"></i> Modifier</button>
            <button type="button" data-id="${contact.id}" class="btn btn-danger supp"><i class="fa-solid fa-trash-can"></i> Supprimer</button>
          </td>
        </tr>`
        }
      );

      html += `</tbody>
            </table>
    `;
    }


    $("section[data-cible='liste']").html(html);

  });
  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

function suppression(e) {
  // 1- récupérer l'id à partir de l'attribut data-id
  // 2- faire une requete ajax :
  //   -- verbe HTTP : DELETE
  //   -- route : contacts/--id
  //   -- id : id du contact (etape 2)

  let id = $(e.target).data("id");
  let request = $.ajax({
    type: "DELETE",
    url: "http://localhost:3000/contacts/" + id,
  });

  request.done(function (response) {
    affichage(e)
  });
  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

function modif(e) {

  /* pre-remplir le form
  recuperer l'id du contact
  requete ajax 
  type : get
  route : GET    /contacts/1
  recup des valeurs + mettre les infos dans les inputs
  */
  let id = $(e.target).data("id");
  let request = $.ajax({
    type: "GET",
    url: "http://localhost:3000/contacts/" + id,
    dataType: "json",
  });

  request.done(function (response) {
    $(".contenu").hide();
    $("section[data-cible=modif]").show();
    $("#idModif").val(response.id);
    $("#nomModif").val(response.nom);
    $("#prenomModif").val(response.prenom);
  });
  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });

}

function maj(e) {
  e.preventDefault();
  let id = $("#idModif").val();
  let donnees = {
    "id": id,
    "nom": $("#nomModif").val(),
    "prenom": $("#prenomModif").val(),
  }

  let request = $.ajax({
    type: "PUT",
    url: "http://localhost:3000/contacts/" + id,
    data: donnees,
    dataType: "json",

  });

  request.done(function (response) {
    let htmlNotif = `
      <button type="button" class="btn btn-primary d-none" id="liveToastBtn">Show live toast</button>

      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="liveToast">
        <div class="toast-header">
          <strong class="me-auto">Mise à jour du contact réussie</strong>
          <small>${response.id}</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
        <h3>Nouvelles valeurs : </h3>
          <b>ID : </b> ${response.id} <br>
          <b>Nom :</b> ${response.nom}<br>
          <b>Prénom :</b> ${response.prenom}<br>
          <div class="mt-2 pt-2 border-top">
            <button type="button" class="btn btn-primary btn-sm liste">Liste des contacts</button>
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Fermer</button>
          </div>
        </div>
      </div>
    `;
    $(".notif").html(htmlNotif);
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
      toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample, { autohide: false });
        toast.show()
      })
    }
    $("#liveToastBtn").trigger("click");
    $(document).on("click", "button.liste", function (e) {
      $(".notif").html("");
      $("a[data-source=liste]").trigger("click");
    })
  });
  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });


}






