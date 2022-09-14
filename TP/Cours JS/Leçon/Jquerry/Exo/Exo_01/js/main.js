$(document).ready(function () {
  $(".repondre").click(function (e) {
    if ($("#capital").val() === "paris") {
      // On récupére la valeur de l'input et on la compare a la réponse, si elle est bonne
      $(".rep_res").show(); // on affiche la div qui contient reponse set resultat
      $(".reponse")
        .html("<p>Bonne réponse</p>") // on mets un message
        .css({ border: "1px solid green", color: "green" }); // puis on ajoute le style
      $(".resultat").html("<p>10/10</p>"); // et on mets la note
    } else {
      // Sinon
      $(".rep_res").show(); // on affiche la div qui contient reponse set resultat
      $(".reponse")
        .html(
          "<ul>  <li>Réponse Erroné</li>  <li>La réponse est Paris</li>  </ul>"
        ) // on mets un message avec la réponse
        .css({ border: "1px solid red", color: "red" }); // puis on ajoute le style
      $(".resultat").html("<p>0/10</p>"); // et on mets la note
    }
  });
});
