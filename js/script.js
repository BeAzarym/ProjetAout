// Projet Août
"use strict";


/*
-Function traitement de données
  @Nom - String
  @Auteur - String
  @Prix - Number
  @Année - Number
    range max date actuel
  @Genre - string
    Si vide -> "Autre"

Recuperer donnée -> Vérification conditions d'existance + présence* -> Push -> actualisation
*Si déja présent -> Erreur


Fonction gestion "prêt"
*/
let Bibliotheque = [{bookName: "Les 4 accords de Toltèques", bookAuthor: "Miguel Ruiz", bookPrice: "49,55", bookYear: "1985", bookStyle: "Encyclopédie"},
                    {bookName: "Cherub", bookAuthor: "Robert Muchamore", bookPrice: "29,99", bookYear: "2016", bookStyle: "Aventures"}];
function init() {
    document.getElementById("secondBox").innerHTML += genererTable(Bibliotheque);

}
function sauvegardeDonne () {
    let bookName = document.getElementById("bookName").value;
    let bookAuthor = document.getElementById("bookAuthor").value;
    let bookPrice = document.getElementById("bookPrice").value;
    let bookYear = document.getElementById("bookYear").value;
    let bookStyle = document.getElementById("bookStyle").value;

    function book(bookName, bookAuthor, bookPrice, bookYear, bookStyle) {
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.bookPrice = bookPrice;
        this.bookYear = bookYear;
        this.bookStyle = bookStyle;
    }

    let bookCreator = new book (bookName, bookAuthor, bookPrice, bookYear, bookStyle);
    console.log(checkData(bookCreator));
    if(! checkData(bookCreator)){
        Bibliotheque.push(bookCreator);
        console.log(Bibliotheque);
        document.getElementById("secondBox").innerHTML = genererTable(Bibliotheque);
    } else {alert("Le livre " + bookCreator.bookName + " est déja présent dans la bibliothèque.");}
}


function checkData(newBook) {
    let t = Bibliotheque.filter(function (x) {
            return (x.bookName === newBook.bookName);});
    return t.length !== 0;
}

function test (){
    document.getElementById("bookName").value = "Harry Potter";
    document.getElementById("bookAuthor").value = "Jk Rowling";
    document.getElementById("bookPrice").value = 63.99;
    document.getElementById("bookYear").value = 1991;
    document.getElementById("bookStyle").value = "Romancier"
}

function genererTable(tableauObjets){
    if (tableauObjets.length === 0) return "<table></table>";
    let proprietes = Object.keys(tableauObjets[0]);
    let table = "<table>";

    let titres = "<tr>";
    for(let e of proprietes){
        titres += "<th>" + e + "</th>";
    }
    table += titres;

    for (let e of tableauObjets){
        let tr= "<tr>";
        for (let p of proprietes){
            tr += "<td>" + e[p] + "</td>";
        }
        tr += "</tr>";
        table += tr;
    }
    table += "</table>";
    return table;
}
