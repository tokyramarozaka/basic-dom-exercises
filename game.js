// Identifier les éléments clés du DOM
const cactus = document.querySelector(".cactus");
const dino = document.querySelector(".dinosaur");

window.addEventListener("keydown", (event) => {
  if (event.key == ' ') {
    dino.classList.toggle('isJumping');

    setTimeout(function() {
      dino.classList.toggle('isJumping');
    }, 500);
  }
})

// Tous les 50 ms regardes si il n'y a pas collision.
setInterval(function() {
  // TODO :remplacer 'false', par la vraie condition."
  if (false) {
    alert("you lose");
  }
}, 50);
