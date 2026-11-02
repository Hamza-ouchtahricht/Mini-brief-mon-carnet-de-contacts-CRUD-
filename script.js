
const form = document.querySelector("#form");
const inputNom = document.querySelector("#nom");
const inputTel = document.querySelector("#tel");
const btnSubmit = document.querySelector("#btn-submit");
const msgErreur = document.querySelector("#erreur");
const inputRecherche = document.querySelector("#recherche");
const compteur = document.querySelector("#compteur");
const liste = document.querySelector("#liste");

let contacts = [
    { id: 1, nom: "Hamza Ouchtahricht", tel: "0612345678" },
    { id: 2, nom: "madara uchiha", tel: "0687654321" },
];

let edit = null;

