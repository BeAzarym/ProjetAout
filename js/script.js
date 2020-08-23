// Projet Août
// Calvin Chabeau | HE201842
"use strict";

let poche = [{Nom: "Replay", Auteur: "Ken Grimwood", Prix: 7.99, Annee: "1997", Genre: "Aventures", Statut: "Indisponible"}];
let bibliotheque = [{
    Nom: "Les 4 accords de Toltèques",
    Auteur: "Miguel Ruiz",
    Prix: 49.55,
    Annee: "1985",
    Genre: "Encyclopédie",
    Statut: "Disponible"
},
    {Nom: "Cherub", Auteur: "Robert Muchamore", Prix: 29.99, Annee: "2016", Genre: "Aventures", Statut: "Disponible"},
    {Nom: "Encyclopédie du Mouvement wallon", Auteur: "Micheline Libon", Prix: 20.69, Annee: "2010",Genre:"Encyclopédie", Statut: "Disponible"},
    {Nom: "Perma-culture, tome 1", Auteur: "Bill Mollinson", Prix: 21.50, Annee: "2006", Genre:"Encyclopédie", Statut: "Disponible"},
    {Nom: "Iliade", Auteur: "Homère", Prix: 9.10, Annee: "2012", Genre:"Roman", Statut: "Disponible"},
    {Nom: "Replay", Auteur: "Ken Grimwood", Prix: 7.99, Annee: "1997", Genre: "Aventures", Statut: "Indisponible"},
    {Nom: "La cité des chimères", Auteur: "Vania I. Prates", Prix: 18, Annee: "2019", Genre: "Fantasy", Statut: "Disponible"}];

function init() {
    document.getElementById("collectionLivre").innerHTML = genererTable(bibliotheque);
    document.getElementById("pocheLivre").innerHTML = genererTable(poche);
    sommeLivre(poche);
}
/**
 * Crée un objet contenant les informations du livre
 *
 * @constructor
 * @this book
 * @param bookName Nom du livre.
 * @param bookAuthor Auteur du livre.
 * @param bookPrice Prix du livre.
 * @param bookYear Année de parution du livre.
 * @param bookStyle Genre du livre.
 * @param bookStatus Statut du livre, "Disponible" par défault.
 *
 * Si le livre n'est pas dans la bibliothèque et l'ajoute dans celle-ci
 *
 */

function sauvegardeDonne() {
    let bookName = document.getElementById("bookName").value;
    let bookAuthor = document.getElementById("bookAuthor").value;
    let bookPrice = document.getElementById("bookPrice").value;
    let bookYear = document.getElementById("bookYear").value;
    let bookStyle = document.getElementById("bookStyle").value;
    let bookStatus = true;

    function book(bookName, bookAuthor, bookPrice, bookYear, bookStyle, bookStatus) {
        this.Nom = bookName;
        this.Auteur = bookAuthor;
        this.Prix = bookPrice;
        this.Annee = bookYear;
        this.Genre = bookStyle;
        this.Statut = bookStatus
    }

    let bookCreator = new book(bookName, bookAuthor, bookPrice, bookYear, bookStyle, bookStatus);
    console.log(checkData(bookCreator));
    if (!checkData(bookCreator)) {
        bibliotheque.push(bookCreator);
        console.log(bibliotheque);
        document.getElementById("collectionLivre").innerHTML = genererTable(bibliotheque);
    } else {
        alert("Le livre " + bookCreator.Nom + " est déja présent dans la bibliothèque.");
    }
}

function checkData(newBook) {
    let t = bibliotheque.filter(function (x) {
        return (x.Nom === newBook.Nom);
    });
    return t.length !== 0;
}

/**
 * Gère l'emprunt d'un livre
 *
 *@param name  Nom du livre
 * Vérifie si le livre est présent dans la bibliothèque, si il y est change son statut en false
 * Le livre est ajouter dans votre poche
 */
function emprunter(name) {
    name = document.getElementById("myBookName").value;
    for (let i = 0; i < bibliotheque.length; i++) {
        if (bibliotheque[i].Nom === name) {
            bibliotheque[i].Statut = "Indisponible";
            let livre = bibliotheque[i];
            poche.push(livre);
            document.getElementById("collectionLivre").innerHTML = genererTable(bibliotheque);
            document.getElementById("pocheLivre").innerHTML = genererTable(poche);
            sommeLivre(poche);
        }
    }
}

function rendre() {
    let name = document.getElementById("myBookName").value;
    for (let i = 0; i < poche.length; i++) {
        if (poche[i].Nom === name) {
            poche.splice(i, 1);
        }
    }
    for (let i = 0; i < bibliotheque.length; i++) {
        if (bibliotheque[i].Nom === name) {
            bibliotheque[i].Statut = "Disponible";
            init();

        }
    }
}


/**
 * Additionne le prix de tout les livres afin d'en afficher la somme
 *
 *@param tableau  Tableau de donnée
 * Si la longueur du tableau est égal a 0 @return 0
 * Si celui-ci est différent,parcour le tableau et additionne le prix de tout les livre.
 *
 */
function sommeLivre(tableau) {
    if (tableau.length === 0) return "0";
    let resultat = 0;
    for (let i = 0; i < tableau.length; i++) {
        resultat += parseFloat(tableau[i].Prix);
    }
    document.getElementById("pocheValeur").innerHTML = "La valeur total de vos livres est de " + resultat.toFixed(2) + "€";
}

function test() {
    document.getElementById("bookName").value = "Harry Potter";
    document.getElementById("bookAuthor").value = "Jk Rowling";
    document.getElementById("bookPrice").value = 63.99;
    document.getElementById("bookYear").value = 1991;
    document.getElementById("bookStyle").value = "Aventures"
}

function genererTable(tableauObjets) {
    if (tableauObjets.length === 0) return "<table></table>";
    let proprietes = Object.keys(tableauObjets[0]);
    let table = "<table>";

    let titres = "<tr>";
    for (let e of proprietes) {
        titres += "<th>" + e + "</th>";
    }
    table += titres;

    for (let e of tableauObjets) {
        let tr = "<tr>";
        for (let p of proprietes) {
            tr += "<td>" + e[p] + "</td>";
        }
        tr += "</tr>";
        table += tr;
    }
    table += "</table>";
    return table;
}