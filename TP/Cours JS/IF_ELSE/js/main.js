const nb = 3;

if (nb == 1) { // Si nb == 1 
    document.write('1'); // ecriture de 1 sur le body
    console.log(nb == 1);
} else if (nb == 2) { // Sinon si nb == 2
    document.write('2'); // ecriture de 2 sur le body
    console.log(nb == 2);
} else if (nb == 3) { // Sinon si nb == 3
    document.write('3'); // ecriture de 3 sur le body
    console.log(nb == 3);
} else { // Sinon nb == 4
    document.write('4'); // ecriture de 4 sur le body
    console.log(nb == 4);
}


const x = 14;
const y = 10;


if (x == y) { // Si (x == y)
    console.log("les deux nombres sontégaux");
} else if (x > y) { // Sinon si (x sup a y)
    console.log("x est supérieur à y");
} else { // Sinon
    console.log("x est inférieur à y");
}

if (x > y && x < 20) { // si (x sup a y et x inf a 20)
    console.log("nombre autorisé");
}


const z = 14;
const w = 10;

if ((z > w && z < 20) || (w == 14 && z == 10)) { // Si ((z sup a w et z inf a 20) ou (w == 14 et z == 10))

}



const msg = x > 10 ? console.log("qte permise") : console.log("qte non permisse"); // Affectation conditionné