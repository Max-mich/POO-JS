function Document(numEnreg, titre) {
  this.numEnreg = numEnreg;
  this.titre = titre;
}
function Livre(numEnreg, titre, auteur, nbrPages) {
  Document.call(this, numEnreg, titre, auteur, nbrPages);
  this.auteur = auteur;
  this.nbrPages = nbrPages;
  if (nbrPages < 100) {
    console.log("Nombre de page entre 0 et 100");
  } else if (nbrPages < 200) {
    console.log("Nombre de page entre 101 et 200");
  } else if (nbrPages < 300) {
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
let livre = new Livre(100, "Bob", "Max", 250);
console.log(livre);
