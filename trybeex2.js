let word = "apple";

let penultima;
let ultima;
let length;
let newString;

length = word.length;
ultima = word[length - 1];
penultima = word[length - 2];
newString = ultima + " " + penultima;
console.log (newString);
