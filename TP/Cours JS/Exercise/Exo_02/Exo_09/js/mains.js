function multiplication() {
    let html = `<table cellspacing="2" border="2" cellpadding="5">`;
    for (let i = 1; i <= 9; i++) {
      html += `<tr>`
      for (let j = 1; j <= 9; j++) {
        html += `<td>${i * j}</td>`;
      }
      html += `</tr>`
    }
    html += `</table>`;
    return html;
  }
  
  document.write(multiplication());