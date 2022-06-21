function testDate() {
    // date.toISOString() ==> retourne une date au format 2022-06-13T12:40:58.184Z
    // chaine.split("sep") ==> retourne tab

    const date = new Date();
    const horodatage = date.toISOString(); // 2022-06-13T12:40:58.184Z (toISOString permet de renvoyer une chaine de caracteres au format ISO)

    let tabDate = horodatage.split("T"); // tab
    let dateAuj = tabDate[0]; // 2022 - 06 - 13

    dateElements = dateAuj.split("-")
    let year = dateElements[0]; // placement de l'année en 1er
    let month = dateElements[1]; // placement du mois en 2nd
    let day = dateElements[2]; //  placement du jour en 3éme

    document.write("<br><br>") // Double saut de ligne 
    document.write(`${day}/${month}/${year}`); // on écrit  la function de type jour mois année.

}

testDate(); // appel de la fonction testDate


// Code Simplifié 

function testDate() {
    const date = new Date();
    dateElements = date.toISOString().split("T")[0].split("-")
    document.write(`${dateElements[2]}/${dateElements[1]}/${dateElements[0]}`);

}
document.write("<br><br>")
testDate();


const date = new Date();
document.write("<br><br>")
document.write(`${date.getMonth() + 1 < 10 ? "0" : "" }${date.getMonth() + 1 }`) // Afficahge conditionné