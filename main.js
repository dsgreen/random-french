var phrases = [
  'Bonjour!',
  'Salut!',
  'Mon Dieu.',
  'Au revoir.',
  'O&ucirc; est la piscine?',
  'Allons y a l\'ecole.',
  'Je besoin d\'une stylo s\'il vous pla&icirc;t.',
  'Apres midi.',
  'Bon soir.',
  'Les bon temps rouler.',
  "Ceci n'est pas un pipe.",
  'Je suis fatigu&eacute;.',
  "L'ennui."
];

var rand;

// empty french div, add some space
document.getElementById('french').innerHTML = '&nbsp;';

// add event listeners
document.getElementById('btn').addEventListener("mouseup", handleMouseUp);
document.getElementById('btn').addEventListener("keyup", handleKeyUp);

// create a random number based on length of array
function generate() {
  rand = Math.floor(Math.random() * Math.floor(phrases.length));
  // console.log(rand);
}
// output phrase to HTML
function outputHTML() {
  // console.log(rand);
  document.getElementById('french').innerHTML = phrases[rand];
}
function handleKeyUp(e) {
  // console.log(e.key);
  switch (e.key) {
    case "Enter":
      generate();
      outputHTML();
      break;
    case " ":
      generate();
      outputHTML();
      break;
    default:
      return;
  }
}
function handleMouseUp() {
  generate();
  outputHTML();
}