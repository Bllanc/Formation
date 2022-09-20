$(document).ready(function () {
  $("button[type=submit]").click(function (e) {
    e.preventDefault();
    // 1- recupérer les valeurs tapées dans le form
    let donnees = {
      marque: $("#marque").val(),
      produit: $("#produit").val(),
      ref: $("#ref").val(),
      spec: $("#spec").val(),
    };
    // 2- générer les combinaisons
    let combinaisons =
      donnees.produit +
      " " +
      donnees.marque +
      "\n" +
      donnees.produit +
      " " +
      donnees.ref +
      "\n" +
      donnees.marque +
      " " +
      donnees.ref +
      "\n" +
      donnees.produit +
      " " +
      donnees.marque +
      " " +
      donnees.ref;

    // 3- les afficher dans la textarea
    $("#generation").val(combinaisons);
  });

  $(".copier").click(function (e) {
    e.preventDefault();
    $("#generation").select();
    // let motsCles = $("#generation").val();
    // navigator.clipboard.writeText(motsCles);
    navigator.clipboard.writeText($("#generation").val());
  });
});
