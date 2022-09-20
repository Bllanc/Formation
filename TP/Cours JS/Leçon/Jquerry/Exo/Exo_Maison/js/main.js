$(document).ready(function () {
  $(".boum").click(function () {
    $(".bim").toggleClass("bam");
    if ($(".bim").text() === "para non clique") {
      $(".bim").text("para clique");
    } else if ($(".bim").text() === "para clique") {
      $(".bim").text("para non clique");
    }
  });
});
