const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); //Sélectionner l'ensemble des points

let indiceActuel = 0;

// Fonction pour actualiser les points indicateurs
function rafraichirIndicateurs(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Appliquer la classe au point sélectionné
        } else {
            dot.classList.remove('dot_selected'); // Retirer la classe des autres points
        }
    });
}

// Fonction pour mettre à jour les indicateurs, l'image et le contenu textuel
function rafraichirCarrousel(index) {
    // Mettre à jour l'indice pour tourner en boucle
    if (index < 0) {
        indiceActuel = slides.length - 1; // Revient à la dernière image si on clique à gauche sur la première
    } else if (index >= slides.length) {
        indiceActuel = 0; // Revient à la première image si on clique à droite sur la dernière
    } else {
        indiceActuel = index; // Sinon, on garde l'indice actuel
    }

    // Mettre à jour l'affichage de l'image
    const imagePath = `assets/images/slideshow/${slides[indiceActuel].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${indiceActuel + 1}`;

    // Mettre à jour le texte
    const tagLine = slides[indiceActuel].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    // Mettre à jour les points indicateurs
    rafraichirIndicateurs(indiceActuel);
}

// Écouteur d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', function () {
    rafraichirCarrousel(indiceActuel - 1); // Passe à l'image précédente
});

// Écouteur d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click', function () {
    rafraichirCarrousel(indiceActuel + 1); // Passe à l'image suivante
});

// Afficher la première diapositive à l'ouverture de la page
rafraichirCarrousel(indiceActuel);
