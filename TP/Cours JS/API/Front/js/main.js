let request = $.ajax({
  type: "GET",
  url: "http://localhost:3000/posts",
  dataType: "json",
});

request.done(function (response) {
    console.log(response);
});
request.fail(function (http_error) {
  //Code à jouer en cas d'éxécution en erreur du script du PHP

  let server_msg = http_error.responseText;
  let code = http_error.status;
  let code_label = http_error.statusText;
  alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
});
