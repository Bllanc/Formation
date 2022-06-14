const age = 10;

switch (age) {
    case 10:
    case 11:
    case 12:
        console.log("enfant");
        break;
    case 18: // Dans le cas ou 
        console.log("majeur");
        break;
    case 60: // Dans le cas ou 
        console.log("retraité");
        break;
    default:
        console.log("autres");
}

switch (true) {
    case age >= 0 && age <= 12:
        console.log("enfant");
        break;
    case age >= 13 && age < 18:
        console.log("adolescent");
        break;
    case age >= 18:
        console.log("majeur");
        break;
    default:
        console.log("erreur");
}