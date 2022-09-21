$(document).ready(function () {
  $(".nav-link").click(function (e) {
    e.preventDefault();
    $(".contenu").hide();
    // recupérer la valeur de l'attribut data du lien
    let attribut = $(this).data("source");
    // chercher la div dont l'attribut data a cette valeur et l'afficher
    $("section[data-cible='" + attribut + "']").show();
  });

  $("a[data-source=liste]").click(function (e) {
    e.preventDefault();
    let request = $.ajax({
      type: "GET",
      url: "http://localhost:3000/contacts",
      dataType: "json",
    });

    let html = "";
    request.done(function (response) {
      if (response.length === 0) {
        html = `<h2 class="py-4 h1 ">Aucun contact n'a été trouvé.  </h2>`;
      } else {
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

        response.map(function (contact) {
          html += `
        <tr>
          <th scope="row">${contact.id}</th>
          <td>${contact.nom}</td>
          <td>${contact.prenom}</td>
          <td>
            <button type="button" data-id="${contact.id}" class="btn btn-info text-white"><i class="fa-solid fa-pen-to-square"></i> Modifier</button>
            <button type="button" data-id="${contact.id}" class="btn btn-danger suppr"><i class="fa-solid fa-trash-can"></i> Supprimer</button>
          </td>
        </tr>`;
        });

        html += `   </tbody>
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
  });
});
