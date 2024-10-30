"use strict";

// Constantes
const header = document.querySelector('.header');


// Gestion du header
async function fetchNav() {
    try {
        const response = await fetch('assets/data/nav.json');
        if (!response.ok) {
            throw new Error('La réponse du serveur n\'est pas valide. Code d\'erreur : ' + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des données :', error);
    }
}
