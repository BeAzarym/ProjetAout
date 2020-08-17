// Projet Août
//"use strict";


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


function sauvegardeDonne () {
    let bookName = document.getElementById("bookName").value;
    let bookAuthor = document.getElementById("bookAuthor").value;
    let bookPrice = document.getElementById("bookPrice").value;
    let bookYear = document.getElementById("bookYear").value;
    let bookStyle = document.getElementById("bookStyle").value;

    function bookCreator (bookName,bookAuthor,bookPrice,bookYear,bookStyle) {
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.bookPrice = bookPrice;
        this.bookYear = bookYear;
        this.bookStyle = bookStyle;}

    let book = new bookCreator(bookName,bookAuthor,bookPrice,bookYear,bookStyle);
    console.log(book);
}



