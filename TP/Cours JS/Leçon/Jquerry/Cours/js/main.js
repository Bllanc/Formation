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
// $("p").css({ "background-color": "yellow", "font-size": "200%" });
// $("a").css({
//   background: "pink",
//   color: "white",
//   border: "2px solid black",
//   "border-radius": "8px",
//   padding: "5px",
// });

// // Ajout d’elements au DOM
// // La fonction prepend : ajoute du contenu au debut du selecteur (à l’intérieur et en premier lieu)
// {/* <p class="extensible">para extensible</p>;
// $(".extensible").prepend("contenu d'extension au debut<br/>"); */}
// // ----
// // La fonction append() : ajoute du contenu à la fin du selecteur (à l’intérieur et en dernier lieu)
// $(".extensible").append("<br/>contenu d'extension à la fin");
// // ----
// // La fonction before() : ajoute du contenu avant le selecteur (à l’extérieur et avant )
// $(".extensible").before("<p>para externe avant</p>");
// // La fonction after() : ajoute du contenu apres le selecteur (à l’extérieur et apres)
// $(".extensible").after("<p>para externe apres</p>");
// // ---
// // Suppression des elements
// // La fonction remove() : supprime un element du DOM
// {/* <p class="supprimer">Lorem ipsum dolor quidem Aut.</p>;
// $(".supprimer").remove(); */}
// // -----
// // Acces et modification des attributs
// // Pour accéder et pour modifier les attributs d’un element, on utilise la fonction attr()
// // Pour recupérer la valeur de l’attribut, on le lui passe en param
// <a href="https://www.google.com/">lien vers google</a>;
// console.log($("a").attr("href"));
// // pour modifier sa valeur, on lui passe deux param, le premier est le nom de l’attribut, et le 2eme la nouvelle valeur.
// $("a").attr("href", "https://www.w3schools.com/jquery/default.asp");
// console.log($("a").attr("href"));
// // NB : il est possible d’ajouter des attributs en utilisant la meme syntaxe (si l’attribut n’existe pas, on l’ajoute).
// $("a").attr("target", "_blank");
// console.log($("a").attr("target"));
// // ----------
// //recupération
// console.log($("a").attr("href"));
// // modif
// $("a").attr("href", "https://www.w3schools.com/jquery/default.asp");
// console.log($("a").attr("href"));
// // ajout
// $("a").attr("target", "_blank");
// console.log($("a").attr("target"));

// // ----

// // la fonction data() : elle permet de récupérer ou de modifier les attributs data-
// // $(selecteur).data("suffixe"); // lecture
// // $(selecteur).data("suffixe", "nvValeur"); // modification
// // Exp:
// <div
//   class="div-data"
//   data-role="user"
//   data-info='{"nom":"HIDRI", "prenom":"Ryan"}'
// ></div>;
// console.log($(".div-data").data("role"));
// console.log($(".div-data").data("info").nom);
// // NB : la fonction attr est valable aussi pour les attributs data, par contre, il faut mentionner le nom complet de l’attribut
// console.log($(".div-data").data("role"));
// console.log($(".div-data").attr("data-role"));

// // ----
// // Ex : changer le role de user à admin, puis afficher la nouvelle valeur

// $(".div-data").data("role", "admin");
// // Ou bien
// $(".div-data").attr("data-role", "admin");
// // afficher la nouvelle valeur
// console.log($(".div-data").data("role"));
// console.log($(".div-data").attr("data-role "));

// NB : dans le cas où on utilise un objet json comme valeur pour un attribut data, on privilégie la fonction data (l’utilisation de attr est possible, mais elle le voit comme une chaine de caractères)
// console.log($(".div-data").attr("data-info")); // chaine
// console.log($(".div-data").data("info")); // objet
// Ex :  changer le prenom de Ryan à Ryan Junior

// 1- recupérer le contenu de l'attribut dans une var
let fullName = $(".div-data").data("info");
console.log(fullName);

// 2- modifier le prenom dans la var
fullName.prenom = "Ryan Jr";
console.log(fullName);

// 3- remettre la var dans l'attribut
$(".div-data").data("info", fullName);
console.log($(".div-data").data("info"));
// Rq : privilégier data au lieu de attr pour que l’attribut soit considéré comme objet lors de la récupération.

// -----
// Autres fonctions des attributs
// removeAttr () : supprime un attribut
// Dans le html, ajouter au lien une classe
// class="lien-supp"
// $(".lien-supp").removeAttr("class")
// console.log($(".lien-supp "));

// hasClass() : retourne true si l’element a la classe passée en param, false sinon
// console.log($(".btn-style").prev().hasClass("para-style")); // true
// console.log($(".div-eleve").hasClass("recherche")); // false
// ex : tester si le lien a la classe  "lien-supp"
// tester si le lien a la classe  "lien-autre

console.log("====================================");
console.log($("a").hasClass("lien-supp"));
console.log("====================================");
console.log("====================================");
console.log($("a").hasClass("lien-autres"));
console.log("====================================");

// addClass : ajoute une classe à un element
// ajouter la classe "lien-autre"
// $("a").addClass("lien-autre") ;
// console.log($("a"));
// removeClass() : supprime une classe
// supprimer la classe "lien-autre"
// $("a").removeClass("lien-autre");
// console.log($("a"));
// toggleClass() : alterne entre l’ajout et la suppression d’une classe
// créer un bouton
// <button>Toggle class</button>
// Créer une classe CSS "para-rouge"
$(".toggleBtn").click(function () {
  $("p").toggleClass("para-rouge");
});
// Parcours des elements (tableau) : permet d’exécuter une cb sur une collection d’elements qui répondent à un selecteur (un par un, un a chaque fois). La cb admet 2 param : l’index et la valeur de l’element (à l’intérieur de la fonction cb, on utilise $(this) pour référencer le param element).

// syntaxe
// $(selector).each(
// function(index,element) {

// }
// );
// Exp :
// $("p").each(function (index, element) {
//   // let elemClass = $(this).attr("class");
//   let elemClass = $(element).attr("class");
//   console.log(elemClass);
//   console.log("index", index);
// });

$(".bc-btn").click(function () {
  $("li").each(function (index, e) {
    $(e)
      .attr("class", "bg-bc")
      .text(`each : li ${index + 1}`);
  });
});

// Exécuter un evenement une seule fois
$("ul").one("mouseenter", function () {
  console.log("message une seule fois");
});
// Variante 2 : la cb s’exécute une seule fois pour CHACUN des evenements
$("ul").one("click mouseleave", function () {
  console.log("message une seule fois");
});
// Empecher le comportement par defaut d’un element
$(".no-link").click(function (e) {
  e.preventDefault();
  console.log("pas de redirection");
});
// Declencher un evenement (artificiel)
$(".trigger-btn").click(function () {
  console.log("avant");
  $(".trigger-link").trigger("click");
  console.log("apres");
});

$(".trigger-link").click(function (e) {
  console.log("lien cliqué");
  console.log(e.type);
});
//Ex : mettre à jour la valeur du nom suite à un click sur le bouton ‘’maj-form-btn’’
$(".maj-form-btn").click(function () {
  $("#nom").val("Averlan");
  $("#prenom").val("Allan");
});

/* AJAX */

let request = $.ajax({
  type: "POST",
  url: "controller.php",
  data: Datas,
  dataType: "json",
  timeout: 120000, //2 Minutes
  cache: false,
  contentType: false,
  processData: false,
  beforeSend: function () {
    //Code à jouer avant l'appel ajax en lui même
  },
});

request.done(function (output_success) {
  //Code à jouer en cas d'éxécution sans erreur du script du PHP
  alert(output_success.output);
});
request.fail(function (http_error) {
  //Code à jouer en cas d'éxécution en erreur du script du PHP

  let server_msg = http_error.responseText;
  let code = http_error.status;
  let code_label = http_error.statusText;
  alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
});

request.always(function () {
  //Code à jouer après done OU fail dans tous les cas
});
