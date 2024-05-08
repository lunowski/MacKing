


/*1. Créer et lier un fichier JS pour le projet
2. Déclarer des variables pour le nombre de produits
commandés pour chaque produit vendu sur le site.
3. Leur assigner la valeur 0 par défaut.
4. Déclarer une variable pour le nombre total de
produits. Lui assigner la somme des variables
précédentes.
5. Déclarer des variables pour les prix, le coût total de la
commande. Leur assigner les valeurs
correspondantes.*/

// Étape 1 : Déclarer des variables pour le nombre de produits commandés pour chaque produit
let nombreSalad = 0;
let nombreTempeh = 0;
let nombreDosa = 0;
let nombreWrap = 0;

// Étape 2 : Déclarer une variable pour le nombre total de produits et lui assigner la somme des variables précédentes
let TotalProduits = nombreSalad + nombreTempeh + nombreDosa + nombreWrap;

// Étape 3 : Déclarer des variables pour les prix et le coût total de la commande
let prixSalad = 10; // Prix du produit 1
let prixTempeh = 15; // Prix du produit 2
let prixDosa = 20; // Prix du produit 3
let prixWrap = 25;

// Calculer le coût total de la commande
let TotalPrix = (nombreSalad * prixSalad) + (nombreTempeh * prixTempeh) + (nombreDosa * prixDosa) + (nombreWrap * prixWrap)
/*Coder une fonction qui prend comme argument le
nombre de produits commandés et le prix total, et qui
retourne le texte (‘string’) du type :
- “Vous avez commandé xxx produits pour un total de
xxx euros”
ou
- “Vous n’avez pas encore commandé de produit” si le
nombre de produits commandés est 0. */


function afficherCommande(TotalProduits, TotalPrix) {
    if (TotalProduits === 0) {
        return "Vous n’avez pas encore commandé de produit";
    } else {
        return `Vous avez commandé ${TotalProduits} produits pour un total de ${TotalPrix} euros`;
    }
}

/*- Créer un objet pour chaque produit vendu, pour
enregistrer le nombre d’items commandés et le prix*/

let produitsVendus = [
    {
        nom: "Salad",
        quantite: nombreSalad,
        prix: prixSalad
    },
    {
        nom: "Tempeh",
        quantite: nombreTempeh,
        prix: prixTempeh
    },
    {
        nom: "Dosa",
        quantite: nombreDosa,
        prix: prixDosa
    },
    {
        nom: "Wrap",
        quantite: nombreWrap,
        prix: prixWrap
    }
];
//Créer un tableau avec tous les produits vendus




/* Récupérer les éléments HTML où afficher les quantités de produits
const quantiteProduit1Element = document.getElementById("quantiteProduit1");
const quantiteProduit2Element = document.getElementById("quantiteProduit2");
const quantiteProduit3Element = document.getElementById("quantiteProduit3");
const totalProduitsElement = document.getElementById("totalProduits");

// Mettre à jour les quantités de produits dans l'interface utilisateur
function mettreAJourQuantitesProduits() {
    quantiteProduit1Element.textContent = nombreProduit1;
    quantiteProduit2Element.textContent = nombreProduit2;
    quantiteProduit3Element.textContent = nombreProduit3;
    totalProduitsElement.textContent = nombreTotalProduits;
}*/

// Appeler la fonction pour mettre à jour les quantités de produits
//mettreAJourQuantitesProduits();
// Créer dans votre projet de borne un array qui liste les items vendus, et un array qui liste leurs prix

let itemsVendus = [ "salade", "tempeh", "Wrap", "dosa"];

//- Créer une boucle pour parcourir le tableau de
//produits vendus et additionner les prix.