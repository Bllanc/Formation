let request = $.ajax({
  type: "GET",
  url: "https://jsonplaceholder.typicode.com/todos",
  dataType: "json",
});

let html = "";
let suffix = "";
let texte = "";
request.done(function (response) {
  $(response).map(function (i, item) {
    if (item.completed) {
      suffix = "succes";
      texte = "Finis";
    } else {
      suffix = "danger";
      texte = "En cours";
    }

    html += `<div class='todo ${suffix}'>\
                <p class='top1'>${item.userId} </p>\
                <p class='top2'>${item.id}</p>\
                <p class='top3'>${item.title} </p>\
                <p >${texte}</p>\
            </div>`;
  });
  $(".cardes").append(html);
});
request.fail(function (http_error) {
  //Code à jouer en cas d'éxécution en erreur du script du PHP

  let server_msg = http_error.responseText;
  let code = http_error.status;
  let code_label = http_error.statusText;
  alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
});

/* VERBE HTTP
 * GET → Récupération
 * POST → Création
 * PUT → mise à jour multiple
 * PATCH → mise à jour 1 éléménents
 * DELETE → Suppression
 */
