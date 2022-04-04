let pass1 = document.getElementById("pass-1")
let pass2 = document.getElementById("pass-2")
let pass3 = document.getElementById("pass-3")
let pass4 = document.getElementById("pass-4")
let btn = document.querySelector("button")
let isGenerate = false

btn.addEventListener("click", passGenerator);
pass1.addEventListener("click", copyFunction1)
pass2.addEventListener("click", copyFunction2)
pass3.addEventListener("click", copyFunction3)
pass4.addEventListener("click", copyFunction4)

let charsPass = ["Q","W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "=", "!", "@", "£", "€", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "a", "s","d","f","g","h", "j","k","l",":","`","~","Z","X","C","V","B","N","M","z","x","c","v","b","n","m",",",".","/","<",">","?"] 



function randomPass() {
    let newPass = ""
    let inputNumber = document.getElementById("input-number")
    if(inputNumber.value < 6) {
       document.getElementById("alert-text").textContent = "To small, try more...!"
} else {
  document.getElementById("alert-text").textContent = ""
    for (let i = 0; i < inputNumber.value; i++) {
        let randomChar = Math.floor(Math.random() * charsPass.length)
        newPass += charsPass[randomChar] 
    }
}
    isGenerate = true
return newPass
}


function passGenerator() {
     pass1.value = randomPass()
     pass2.value = randomPass()
     pass3.value = randomPass()
     pass4.value = randomPass()
}



function copyFunction1() {
  /* Select the text field */

  pass1.select();
  pass1.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(pass1.value);
  /* Alert the copied text */
  document.getElementById("alert-text").textContent = "Copied!"
}
function copyFunction2() {
  /* Select the text field */
  pass2.select();
  pass2.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(pass2.value);
  /* Alert the copied text */
  document.getElementById("alert-text").textContent = "Copied!"
}
function copyFunction3() {
  /* Select the text field */
  pass3.select();
  pass3.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(pass3.value);
  /* Alert the copied text */
  document.getElementById("alert-text").textContent = "Copied!"
}
function copyFunction4() {
  /* Select the text field */

  pass4.select();
  pass4.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(pass4.value);
  /* Alert the copied text */
   
  document.getElementById("alert-text").textContent = "Copied!"
}
