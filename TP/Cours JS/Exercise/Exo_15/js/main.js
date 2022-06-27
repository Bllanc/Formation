// Afficher le tableau de contact en tableau HTMl et en comptant le nombre de contact
contacts = [
    { id: 1, nom: "Julien", tel: "0623536587" },
    { id: 2, nom: "Oussama", tel: "0736521498" },
    { id: 3, nom: "Stéphane", tel: "0621459874" },
    { id: 4, nom: "Céline", tel: "0688695214" },
    { id: 5, nom: "Li", tel: "0654123654" },
    { id: 6, nom: "Abdel", tel: "0687563214" },
    { id: 7, nom: "Sophie", tel: "0785213654" },
    { id: 8, nom: "Ursule", tel: "0674563214" },
    { id: 9, nom: "Joseph", tel: "0719752796" },
    { id: 10, nom: "Adama", tel: "0641354789" },
];

function affichage(tabcontatcs) {
    let html = ``;
    html += `<table>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Tél</th>
                </tr>`;
    tabcontatcs.map((contact) => {
        html += `
                        <tr>
                            <td>${contact.id}</td> 
                            <td>${contact.nom}</td>
                            <td>${contact.tel}</td>
                        </tr>
                    `;
    });
    html += `   <tr>
                    <td>Nombres de contact</td>
                    <td colspan="2">${tabcontatcs.length}</td>
                </tr>
            </table>`;
    return html
};


document.write(affichage(contacts));








/*
Lecture de l'énoncé
Analyse de la demande 
Détermine la structure de la solution 
Déterminer les traitements nécessaires
Si il s'agit d'un afficahge , il faut le mettre en dur puis le dynamiser
Si il y a des données iconnues dans l'affichage, il faut les chercher avant puis revenir les ajoutés dans l'affichage
Faire les simplifications et/ou les factorisations nécessaires
*/