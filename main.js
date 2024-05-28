let btnA = document.getElementById("produit-a");
let btnB = document.getElementById("produit-b");
let btnC = document.getElementById("produit-c");
let btnD = document.getElementById("produit-d");

let inputA = document.getElementById("number-a");
let inputB = document.getElementById("number-b");
let inputC = document.getElementById("number-c");
let inputD = document.getElementById("number-d");

let displayTotal = document.getElementById("total-prix");

let produitA = { nom: "produit-a", qte: 0, prix: 10 };
let produitB = { nom: "produit-b", qte: 0, prix: 15 };
let produitC = { nom: "produit-c", qte: 0, prix: 20 };
let produitD = { nom: "produit-d", qte: 0, prix: 25 };

let listeDeProduits = [produitA, produitB, produitC, produitD];

function getProductTotal(prix, qte) {
  return prix * qte;
}

function getTotalPrix() {
  let totalPrix = 0;
  for (let i = 0; i < listeDeProduits.length; i++) {
    totalPrix += getProductTotal(listeDeProduits[i].prix, listeDeProduits[i].qte);
  }
  return totalPrix;
}

function getTotalProduits() {
  let totalProduits = 0;
  for (let i = 0; i < listeDeProduits.length; i++) {
    totalProduits += listeDeProduits[i].qte;
  }
  return totalProduits;
}

function afficherCommande(totalProduits, totalPrix) {
  if (totalProduits === 0) {
    return "Vous n’avez pas encore commandé de produit";
  } else {
    return `Vous avez commandé ${totalProduits} produits pour un total de ${totalPrix} $`;
  }
}

function updateDisplay() {
  let totalProduits = getTotalProduits();
  let totalPrix = getTotalPrix();
  displayTotal.innerText = `Total: ${totalPrix} $`;
  document.getElementById('commande').textContent = afficherCommande(totalProduits, totalPrix);
}

btnA.addEventListener("click", function () {
  produitA.qte++;
  inputA.value = produitA.qte;
  updateDisplay();
});

btnB.addEventListener("click", function () {
  produitB.qte++;
  inputB.value = produitB.qte;
  updateDisplay();
});

btnC.addEventListener("click", function () {
  produitC.qte++;
  inputC.value = produitC.qte;
  updateDisplay();
});

btnD.addEventListener("click", function () {
  produitD.qte++;
  inputD.value = produitD.qte;
  updateDisplay();
});

// Inicializa la visualización
updateDisplay();
