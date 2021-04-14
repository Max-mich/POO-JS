/* function Document(numEnreg, titre) {
  this.numEnreg = numEnreg;
  this.titre = titre;
}
function Livre(numEnreg, titre, auteur, nbrPages) {
  Document.call(this, numEnreg, titre, auteur, nbrPages);
  this.auteur = auteur;
  this.nbrPages = nbrPages;
  if (nbrPages < 100) {
    console.log("Nombre de page entre 0 et 100");
  } else if (nbrPages > 101 && nbrPages < 200) {
    console.log("Nombre de page entre 101 et 200");
  } else if (nbrPages > 200 && nbrPages < 300) {
    console.log("Nombre de page entre 200 et 300");
  } else if (nbrPages > 301) {
    console.log("Nombre de page supérieur à 301");
  } else {
    console.log("Pas de pages");
  }
}
function Revue(numEnreg, titre, mois, annee) {
  Document.call(this, numEnreg, titre, mois, annee);
  this.mois = mois;
  this.annee = annee;
}
function Dictionnaire(numEnreg, titre, langue) {
  Document.call(this, numEnreg, titre, langue);
  this.langue = langue;
}

Livre.prototype = Object.create(Document.prototype);
Revue.prototype = Object.create(Document.prototype);
Dictionnaire.prototype = Object.create(Document.prototype);
let livre = new Livre(100, "Bob", "Max", 150);
console.log(livre); */

// Change random Color

/* const texte = document.querySelector("p span");
texte.style.color = "#FF0000";

function ajoute() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  texte.style.color = "#" + randomColor;
}
function supprime() {
  texte.style.color = "#FF0000";
} */

class Document {
  constructor(numEnreg, titre) {
    this.numEnreg = numEnreg;
    this.titre = titre;
  }
}
class Livre extends Document {
  constructor(numEnreg, titre, auteur, nbrPages) {
    super(numEnreg, titre);
    this.auteur = auteur;
    this.nbrPages = nbrPages;
    if (nbrPages < 100) {
      console.log("Nombre de page entre 0 et 100");
    } else if (nbrPages > 101 && nbrPages < 200) {
      console.log("Nombre de page entre 101 et 200");
    } else if (nbrPages > 200 && nbrPages < 300) {
      console.log("Nombre de page entre 200 et 300");
    } else if (nbrPages > 301) {
      console.log("Nombre de page supérieur à 301");
    } else {
      console.log("Pas de pages");
    }
  }
}
class Revue extends Document {
  constructor(numEnreg, titre, mois, annee) {
    super(numEnreg, titre);
    this.mois = mois;
    this.annee = annee;
  }
}
class Dictionnaire extends Document {
  constructor(numEnreg, titre, langue) {
    super(numEnreg, titre);
    this.langue = langue;
  }
}

let livre = new Livre(5, "Test", "Maxime", 15);
console.log(livre);
let revue = new Revue(5, "Revue", 05, 2017);
console.log(revue);
let dictonnaire = new Dictionnaire(2, "Robert", "Eng");
console.log(dictonnaire);
