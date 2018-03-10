var phrases = [
  'Bonjour!',
  'Salut!',
  'Mon Dieu.',
  'Au revoir.',
  'O&ucirc; est la piscine?',
  'Allons y a l\'ecole',
  'Je besoin d\'une stylo s\'il vous pla&icirc;t.',
  'Apres midi.',
  'Bon soir.',
  'Les bon temps rouler.'
];

var rand;

// empty french div, add some space
document.getElementById('french').innerHTML = '&nbsp;';

// add event listeners
document.getElementById('btn').addEventListener("mouseup", generate);
document.getElementById('btn').addEventListener("keyup", generate);

// create a random number based on length of array, and output phrase to HTML
function generate() {
  rand = Math.floor(Math.random() * Math.floor(phrases.length));
  // console.log(rand);
  document.getElementById('french').innerHTML = phrases[rand];
}