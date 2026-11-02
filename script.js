
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

let editID = null;

function afficher(tableau = contacts){
   liste.textContent = "" ;
    tableau.forEach((contact)=> {
    const li = document.createElement("li");
    li.textContent = contact.nom + "-" + contact.tel + " " ;
    const btnModifier = document.createElement("button");
    btnModifier.textContent = "Modifier";
    btnModifier.className = "modifier";
     btnModifier.dataset.id = contact.id;

    const btnSupprimer = document.createElement("button");
     btnSupprimer.textContent = "Supprimer" ;
     btnSupprimer.className = "supprimer" ;
     btnSupprimer.dataset.id = contact.id ;

     li.append(btnModifier , btnSupprimer) ;
     liste.append(li);


   } ) ;
   compteur.textContent = tableau.length + "contact(s)";

 }

form.addEventListener("submit", (e) => {
         e.preventDefault();
         const nom = inputNom.value.trim();
        const tel = inputTel.value.trim();
      if (nom === "") {
        msgErreur.textContent = "Le nom est obligatoire !";
          return;
    } 
     msgErreur.textContent = "";
    if (editID === null) {
         const nouveauContact = {
       id: Date.now(),
       nom: nom,
       tel: tel
     };
      contacts.push(nouveauContact);
     } else {
     const contactAModifier = contacts.find((c) => c.id === editID);
     contactAModifier.nom = nom;
       contactAModifier.tel = tel;
       editID = null;
      btnSubmit.textContent = "Ajouter";
        } 
      sauvegarder();
      form.reset();
     afficher();
       });

liste.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id);
   if (e.target.matches(".supprimer")) {
   contacts = contacts.filter((c) => c.id !== id);
     sauvegarder();
     afficher();
}
 if (e.target.matches(".modifier")) {
const contact = contacts.find((c) => c.id === id);
inputNom.value = contact.nom;
inputTel.value = contact.tel;
editID = contact.id;
btnSubmit.textContent = "Enregistrer";
}
});

inputRecherche.addEventListener("input", () => {
const texte = inputRecherche.value.toLowerCase();
const contactsFiltres = contacts.filter((c) => {
  return c.nom.toLowerCase().includes(texte);
});
    afficher(contactsFiltres);
});

afficher();
    
   
