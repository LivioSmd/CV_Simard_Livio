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


// Fonction pour créer un élément image
function createImage(src, alt) {
  const imageElement = document.createElement('img');
  imageElement.src = src;
  imageElement.alt = alt;
  return imageElement;
}

// Fonction pour créer un bouton de projet avec événement de clic
function createProjectButton(title, imagesSecondaires) {
  const button = document.createElement('button');
  button.textContent = title;
  button.classList.add('card-btn'); // Ajouter la classe pour le style du bouton
  button.addEventListener('click', () => openModal(title, imagesSecondaires));
  return button;
}

 // Fonction pour ouvrir la modale avec les images secondaires
function openModal(title, imagesSecondaires) {
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = '';

  const divImageTexte = document.createElement('div');
  divImageTexte.classList.add('div-img-text');
  modalContent.appendChild(divImageTexte);

  const textDescModale = document.createElement('div');
  textDescModale.textContent = title;
  textDescModale.classList.add('titre-desc-modale');
  divImageTexte.appendChild(textDescModale);

  imagesSecondaires.forEach(image => {
    const imageElement = createImage(image, 'Image Secondaire');
    divImageTexte.appendChild(imageElement);
  });

  const modal = document.getElementById('modal');
  modal.style.display = 'block';

  const overlayBackground = document.getElementById('overlayBackground');
  overlayBackground.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fonction pour fermer la modale
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';

  const overlayBackground = document.getElementById('overlayBackground');
  overlayBackground.classList.remove('active');
  document.body.style.overflow = 'auto';
}

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const projectsContainer = document.getElementById('projectsContainer');
    const closeModalButton = document.getElementById('closeModal');
    const overlayBackground = document.getElementById('overlayBackground');

    data.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('card');
      projectElement.style.backgroundImage = `url(${project.imagePrincipale})`;

      const divOverlay = document.createElement('div');
      divOverlay.classList.add('overlay');

      const button = createProjectButton(project.titre, project.imagesSecondaires);
      projectElement.appendChild(divOverlay);
      divOverlay.appendChild(button);
      projectsContainer.appendChild(projectElement);
    });

    closeModalButton.addEventListener('click', closeModal);
  })
  .catch(error => console.error(error));
