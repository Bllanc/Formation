$(".contenu").hide();
$("section[data-cible=tab-bord ]").show();

$(document).on("click", ".nav", function (e) {
  e.preventDefault();
  $(".contenu").hide();
  // recupérer la valeur de l'attribut data du lien
  let valeurSource = $(this).data("source");
  // chercher la div dont la'ttribut data a cette valeur et l'afficher
  $("section[data-cible='" + valeurSource + "']").show();
});

$(document).on("click", "a[data-source=liste]", affichage);
$(document).on("click", ".sup", suppression);
$(document).on(
  "click",
  "section[data-cible=nouveau] button[type=submit]",
  ajout
);
$(document).on("click", ".maj", modif);
$(document).on("click", "section[data-cible=modif] button[type=submit]", maj);

/* FONCTION AJOUT */

function ajout(e) {
  e.preventDefault();
  let donnees = {
    id: Date.now(),
    nom: $("#nom").val(),
    ingredient: $("#ingredient").val(),
  };

  let request = $.ajax({
    type: "POST",
    url: "http://localhost:3000/cocktails",
    data: donnees,
    dataType: "json",
  });

  request.done(function (response) {
    $("#nom").val("");
    $("#ingredient").val("");

    let htmlNotif = `
      <button type="button"  id="liveToastBtn">Show live toast</button>

      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="liveToast">
        <div class="toast-header">
          <strong class="me-auto">Création du contact réussie</strong>
          <small>${response.id}</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          <b>ID : </b> ${response.id} <br>
          <b>Nom :</b> ${response.nom}<br>
          <b>Ingrédient :</b> ${response.ingredient}<br>
          <div class="mt-2 pt-2 border-top">
            <button type="button" class="btn btn-primary btn-sm liste">Liste des contacts</button>
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Fermer</button>
          </div>
        </div>
      </div>
    `;
    $(".notif").html(htmlNotif);
    const toastTrigger = document.getElementById("liveToastBtn");
    const toastLiveExample = document.getElementById("liveToast");
    if (toastTrigger) {
      toastTrigger.addEventListener("click", () => {
        const toast = new bootstrap.Toast(toastLiveExample, {
          autohide: false,
        });
        toast.show();
      });
    }
    $("#liveToastBtn").trigger("click");
    $(document).on("click", "button.liste", function (e) {
      $(".notif").html("");
      $("a[data-source=liste]").trigger("click");
    });
  });

  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

/* FONCTION AFFICHAGE */

function affichage(e) {
  e.preventDefault();
  let request = $.ajax({
    type: "GET",
    url: "http://localhost:3000/cocktails",
    dataType: "json",
  });

  request.done(function (response) {
    let html = "";
    if (response.length === 0) {
      html = `<h2>Aucun cocktails n'a été trouvé.  </h2>`;
    } else {
      html += `
      <h2>Liste des cocktails </h2>
      <div class="cocktails">`;

      response.map(function (cocktail) {
        html += `<div class="produits">
                     <h3>${cocktail.nom}</h3>
                     <p>${cocktail.ingredient}</p>
                    <div>
                        <button class="maj" type="button" data-id="${cocktail.id}"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="sup" type="button" data-id="${cocktail.id}"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>`;
      });

      html += `
              </div>
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

/* FONCTION SUPPRESSION */

function suppression(e) {
  // 1- récupérer l'id à partir de l'attribut data-id
  // 2- faire une requete ajax :
  //   -- verbe HTTP : DELETE
  //   -- route : contacts/--id
  //   -- id : id du contact (etape 2)

  let id = $(e.target).data("id");
  let request = $.ajax({
    type: "DELETE",
    url: "http://localhost:3000/cocktails/" + id,
  });

  request.done(function (response) {
    affichage(e);
  });
  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

/* FONCTION MODIF */

function modif(e) {
  let id = $(e.target).data("id");
  let request = $.ajax({
    type: "GET",
    url: "http://localhost:3000/cocktails/" + id,
    dataType: "json",
  });

  request.done(function (cocktail) {
    $(".contenu").hide();
    $("section[data-cible=modif]").show();
    $("#idModif").val(cocktail.id);
    $("#nomModif").val(cocktail.nom);
    $("#ingredientModif").val(cocktail.ingredient);
  });
  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

/* FONCTION MAJ */

function maj(e) {
  e.preventDefault();
  let id = $("#idModif").val();
  let donnees = {
    id: id,
    nom: $("#nomModif").val(),
    ingredient: $("#ingredientModif").val(),
  };

  let request = $.ajax({
    type: "PUT",
    url: "http://localhost:3000/cocktails/" + id,
    data: donnees,
    dataType: "json",
  });

  request.done(function (cocktail) {
    let htmlNotif = `
      <button type="button" class="btn btn-primary d-none" id="liveToastBtn">Show live toast</button>

      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="liveToast">
        <div class="toast-header">
          <strong class="me-auto">Mise à jour du contact réussie</strong>
          <small>${cocktail.id}</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
        <h3>Nouvelles valeurs : </h3>
          <b>ID : </b> ${cocktail.id} <br>
          <b>Nom :</b> ${cocktail.nom}<br>
          <b>Ingrédient :</b> ${cocktail.ingredient}<br>
          <div class="mt-2 pt-2 border-top">
            <button type="button" class="btn btn-primary btn-sm liste">Liste des contacts</button>
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Fermer</button>
          </div>
        </div>
      </div>
    `;
    $(".notif").html(htmlNotif);
    const toastTrigger = document.getElementById("liveToastBtn");
    const toastLiveExample = document.getElementById("liveToast");
    if (toastTrigger) {
      toastTrigger.addEventListener("click", () => {
        const toast = new bootstrap.Toast(toastLiveExample, {
          autohide: false,
        });
        toast.show();
      });
    }
    $("#liveToastBtn").trigger("click");
    $(document).on("click", "button.liste", function (e) {
      $(".notif").html("");
      $("a[data-source=liste]").trigger("click");
    });
  });
  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}
