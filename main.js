var phrases = [
  'hello',
  'hi',
  'oh my',
  'goodbye'
];

var rand;

document.getElementById('btn').addEventListener("mouseup", generate);

function generate() {
  rand = Math.floor(Math.random() * Math.floor(phrases.length));
  console.log(rand);
}