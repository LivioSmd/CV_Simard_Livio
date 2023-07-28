const boutonCompetences = document.getElementById('btn-nav-competences');
const ancreCompetences = document.getElementById('ancre-competences');

boutonCompetences.addEventListener('click', () => {
    ancreCompetences.scrollIntoView({ behavior: 'smooth' });
});

const boutonPresentation = document.getElementById('btn-nav-presentation');
const ancrePresentation = document.getElementById('ancre-presentation');

boutonPresentation.addEventListener('click', () => {
    ancrePresentation.scrollIntoView({ behavior: 'smooth' });
});

const boutonPortfolio = document.getElementById('btn-nav-portfolio');
const ancrePortfolio = document.getElementById('ancre-portfolio');

boutonPortfolio.addEventListener('click', () => {
    ancrePortfolio.scrollIntoView({ behavior: 'smooth' });
});

const boutonContact = document.getElementById('btn-nav-contact');
const ancreContact = document.getElementById('ancre-contact');

boutonContact.addEventListener('click', () => {
    ancreContact.scrollIntoView({ behavior: 'smooth' });
});


// Récupérez toutes les cartes et le modal
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalInfo = document.getElementById("modalInfo");
const closeModal = document.getElementById("closeModal");

// Attachez un gestionnaire d'événement "click" à chaque carte
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Récupérez le texte de la carte cliquée
    const cardText = card.querySelector(".card-btn").textContent;

    // Affichez le texte de la carte dans le modal
    modalInfo.textContent = cardText;

    // Affichez le modal
    modal.style.display = "block";
  });
});

// Attachez un gestionnaire d'événement "click" à l'icône de fermeture du modal pour le fermer
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
