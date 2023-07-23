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
