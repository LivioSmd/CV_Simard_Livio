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