console.log($(".para1")); // selecteur
console.log($(document)); // objet

console.log("====================================");
console.log($(".liens-each"));
console.log("====================================");

// $(document).ready(); elle admet un cb, et s'exécute quand le document est completement chargé
$(document).ready(function () {
  console.log("execution apres chargement du DOM");
});

$(document).ready(function () {
  $(".para1").text("Cours JQuerry").css("color", "skyblue").fadeIn("slow");
});

/* CSS dans JQUERRY*/

//$(selecteur).css("prop", "valeur");
$("p").css("background-color", "skyblue");

//Variante 2 (avec objet json)

// $(selecteur).css({"propriete":"valeur"," propriete ":" valeur ",...});
$("p").css({ "background-color": "yellow", "font-size": "200%" });
$("a").css({
  background: "pink",
  color: "white",
  border: "2px solid black",
  "border-radius": "8px",
  padding: "5px",
});
