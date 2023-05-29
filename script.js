// Obtenir les éléments du DOM
var boutonsQuantite = document.querySelectorAll('.bouton-quantite');
var boutonsSuppression = document.querySelectorAll('.bouton-suppression');
var boutonsFavoris = document.querySelectorAll('.bouton-favoris');
var montantTotal = document.getElementById('montant-total');

// Ajouter des écouteurs d'événements
boutonsQuantite.forEach(bouton => bouton.addEventListener('click', ajusterQuantite));
boutonsSuppression.forEach(bouton => bouton.addEventListener('click', supprimerArticle));
boutonsFavoris.forEach(bouton => bouton.addEventListener('click', basculerFavori));

// Ajuster la quantité
function ajusterQuantite(event) {
  var quantiteEl = event.target.parentNode.querySelector('.quantite-article');
  var prixEl = event.target.parentNode.parentNode.querySelector('.prix-article');
  
  var quantiteActuelle = parseInt(quantiteEl.textContent);
  var prix = parseInt(prixEl.textContent.substring(0, prixEl.textContent.length - 1)); // Supprimer le symbole '€'
  
  if (event.target.classList.contains('bouton-moins') && quantiteActuelle > 1) {
    quantiteEl.textContent = quantiteActuelle - 1;
    mettreAJourMontantTotal(-prix);
  } else if (event.target.classList.contains('bouton-plus')) {
    quantiteEl.textContent = quantiteActuelle + 1;
    mettreAJourMontantTotal(prix);
  }
}

// Supprimer l'article
function supprimerArticle(event) {
  var articleEl = event.target.parentNode;
  var prixEl = articleEl.querySelector('.prix-article');
  var quantiteEl = articleEl.querySelector('.quantite-article');
  var prix = parseInt(prixEl.textContent.substring(0, prixEl.textContent.length - 1)); // Supprimer le symbole '€'
  var quantite = parseInt(quantiteEl.textContent);
  
  articleEl.remove();
  mettreAJourMontantTotal(-prix * quantite);
}

// Basculer en favori
function basculerFavori(event) {
  var boutonFavori = event.target;
  
  if (boutonFavori.style.color === 'red') {
    boutonFavori.style.color = 'black';
  } else {
    boutonFavori.style.color = 'red';
  }
}

// Mettre à jour le montant total
function mettreAJourMontantTotal(montant) {
  var montantActuel = parseInt(montantTotal.textContent);
  montantTotal.textContent = montantActuel + montant;
}

