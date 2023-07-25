const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let randomChar = []
let generatedPass = []

let pass1El = document.querySelector('#pass-1')
let pass2El = document.querySelector('#pass-2')
let lengthEl = document.querySelector('#length')
let warningEl = document.querySelector('#warning')

function renderPass() {  
  generatedPass = []
  const passLength = lengthEl.value;
  
  if (passLength <= 15) {
    let generatedPass1 = getRandomChar(characters, passLength)
    console.log(generatedPass1)
    pass1El.textContent = generatedPass1
  
    let generatedPass2 = getRandomChar(characters, passLength)
    pass2El.textContent =generatedPass2
  }
  else {
    warningEl.textContent = 'Password length cannot be more than 15 characters'
    warningEl.style.color = "red"
  }

}

function getRandomChar(arrayChar, maxNumber) {
  console.log(maxNumber)
  for (let i = 0; i < maxNumber; i++){
    randomChar[i] = Math.floor(Math.random() * arrayChar.length)
    generatedPass[i] = characters[randomChar[i]]
  }

  return generatedPass.join(' ')
}
