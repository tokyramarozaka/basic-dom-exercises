const input = document.querySelector("#name");
const image = document.querySelector("img");
const result = document.querySelector("#result");
const form = document.querySelector("form");

// Empêche le comportement : entrée == soumettre le formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

input.addEventListener("keydown", (event) => {
  // Si c'est la touche entrée qui est appuyée.
  if (event.key == "Enter") {
    // Affiche le chargement et cache le champ de texte
    image.style.display = "block";
    input.style.display = "none";

    // Cache l'image, mets le resultat dans le div result
    // Et affiche result, mais seulement après 3 secondes
    setTimeout(function() {
      image.style.display = "none";
      result.innerText = "Hello " + input.value + "!";
      result.style.display = "block";
    }, 3000);
  }
});
