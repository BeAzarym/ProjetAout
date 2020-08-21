// Projet Août
"use strict";
let poche = [{bookName: "Replay", bookAuthor: "Ken Grimwood", bookPrice: "7.99", bookYear: "1997", bookStyle: "Aventures", bookStatus: false }];
let bibliotheque = [{bookName: "Les 4 accords de Toltèques", bookAuthor: "Miguel Ruiz", bookPrice: "49,55", bookYear: "1985", bookStyle: "Encyclopédie",bookStatus: true},
                    {bookName: "Cherub", bookAuthor: "Robert Muchamore", bookPrice: "29,99", bookYear: "2016", bookStyle: "Aventures", bookStatus: true},
                    {bookName: "Replay", bookAuthor: "Ken Grimwood", bookPrice: "7.99", bookYear: "1997", bookStyle: "Aventures", bookStatus: false }];
function init() {
    document.getElementById("collectionLivre").innerHTML += genererTable(bibliotheque);
    document.getElementById("pocheLivre").innerHTML += genererTable(poche);
}
function sauvegardeDonne () {
    let bookName = document.getElementById("bookName").value;
    let bookAuthor = document.getElementById("bookAuthor").value;
    let bookPrice = document.getElementById("bookPrice").value;
    let bookYear = document.getElementById("bookYear").value;
    let bookStyle = document.getElementById("bookStyle").value;
    let bookStatus = true;

    function book(bookName, bookAuthor, bookPrice, bookYear, bookStyle, bookStatus) {
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.bookPrice = bookPrice;
        this.bookYear = bookYear;
        this.bookStyle = bookStyle;
        this.bookStatus = bookStatus
    }

    let bookCreator = new book (bookName, bookAuthor, bookPrice, bookYear, bookStyle, bookStatus);
    console.log(checkData(bookCreator));
    if(! checkData(bookCreator)){
        bibliotheque.push(bookCreator);
        console.log(bibliotheque);
        document.getElementById("collectionLivre").innerHTML = genererTable(bibliotheque);
    } else {alert("Le livre " + bookCreator.bookName + " est déja présent dans la bibliothèque.");}
}

function emprunter(){
    let name = document.getElementById("myBookName").value;
    for (let i = 0;i < bibliotheque.length;i++){
        if(bibliotheque[i].bookName === name){
           bibliotheque[i].bookStatus = false;
           let livre = bibliotheque[i];
           poche.push(livre);
            document.getElementById("collectionLivre").innerHTML = genererTable(bibliotheque);
            document.getElementById("pocheLivre").innerHTML = genererTable(poche);
        }
    }
}

function rendre() {
    let name = document.getElementById("myBookName").value;
    for (let i = 0;i < poche.length;i++){
        if(poche[i].bookName === name){
            poche[i] = {};
        }
        if(bibliotheque[i].bookName === name){
            bibliotheque[i].bookStatus = true;
            document.getElementById("collectionLivre").innerHTML = genererTable(bibliotheque);
            document.getElementById("pocheLivre").innerHTML = genererTable(poche);
    }

    }
}


function checkData(newBook) {
    let t = bibliotheque.filter(function (x) {
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
