const todos = [{
        id: 1,
        text: "Faire les courses",
        isCompleted: true,
    },
    {
        id: 2,
        text: "Balade au vieux Lille",
        isCompleted: true,
    },
    {
        id: 3,
        text: "Préparer le diner",
        isCompleted: false,
    },
    {
        id: 4,
        text: "Regarder la TV",
        isCompleted: false,
    },
];
// afficher un tableau d'objets
console.log(todos);
// afficher l'attribut text du1er objet du tableau
console.log(todos[0].text);

document.write("Le For : " + "<br>" + "<br>");

for (let i = 0; i < todos.length; i++) { // Pour i est inferieur a la  longeur de todos on incrémente de 1
    document.write(todos[i].text + "<br>"); // On écrit le text d'un élement de todos avec un saut de ligne

}

document.write("<br>" + "Le While : " + "<br>" + "<br>");

let i = 0;
while (i < todos.length) { // Tant que i est inferieur a la longeur de todos
    document.write(todos[i].text + "<br>"); // on écrit le text d'un élément de todos avec un saut de ligne 
    i++; // on inrémente de 1
}

document.write("<br>" + "Le ForEach : " + "<br>" + "<br>");

todos.forEach(function(todo) { // On applique la function todo a tout les éléments de todos 
    document.write(todo.text + "<br>"); // On écrit un text d'un élément avec un saut de ligne 
});