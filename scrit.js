function randomColor() {
    // Retourne une couleur RGB aléatoire dans les tons rouges
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const poule = document.getElementById("fonctionnaire");
  const zero_bors = document.createElement("div");
  const buttons_2 = document.createElement('button');

  buttons_2.classList.add("box");
  buttons_2.textContent = "Bonjour !";

  zero_bors.classList.add("couleur_45");
  zero_bors.append(buttons_2);
  poule.append(zero_bors);

  // Création du h2 pour afficher la couleur
  const parole = document.createElement("h2");
  const divs = document.getElementById("copy");
  divs.append(parole);

  // Affiche une première couleur au début
  const initialColor = randomColor();
  parole.textContent = initialColor;
  zero_bors.style.backgroundColor = initialColor;

  // Quand on clique sur le bouton
  buttons_2.addEventListener("click", function () {
    const newColor = randomColor();
    zero_bors.style.backgroundColor = newColor;
    parole.textContent = newColor; // Met à jour le texte
  });