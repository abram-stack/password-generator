//task:create a random character of 15 based on characters below

//create a random number, as index
//create new array for new pass

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
"/"];

let randomIndexOne;
let randomIndexTwo;

let passOne = [];
let passTwo = [];

let generateBtn = document.getElementById("generate-el");
let passOneEl = document.getElementById("pass1");
let passTwoEl = document.getElementById("pass2");

function generateRandomPassword() { 
  for (let i = 0; i < 15; i++) { 
    randomIndexOne = Math.floor(Math.random() * characters.length);
    randomIndexTwo = Math.floor(Math.random() * characters.length);
  
    passOne[i] = characters[randomIndexOne];
    passTwo[i] = characters[randomIndexTwo];
  }
}





generateBtn.addEventListener('click', function () { 
  generateRandomPassword();
  console.log('button click')
  passOneEl.textContent = passOne;
  passTwoEl.textContent = passTwo;
  console.log(passOne);
  console.log(passTwo);
})