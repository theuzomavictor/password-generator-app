const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let passOneEl = document.getElementById("pass-one-el")
let passTwoEl = document.getElementById("pass-two-el")

function generatePass() {
    let passwordOne = ""
    let passwordTwo = ""
    let passwordLength = 15

    for (let i = 0; i < passwordLength; i++) {
        let passIndexOne = Math.floor(Math.random() * characters.length)
        passwordOne += characters[passIndexOne]
        passOneEl.textContent = passwordOne
        console.log(passwordOne)

        let passIndexTwo = Math.floor(Math.random() * characters.length)
        passwordTwo += characters[passIndexTwo]
        passTwoEl.textContent = passwordTwo
        console.log(passwordTwo)
    }
}

