import { characters } from "./characters.js"

const generateBtn = document.getElementById("generate-btn")
const passWordBox1 = document.getElementById("password-box1")
const passWordBox2 = document.getElementById("password-box2")

const passwordLengthInput = document.getElementById("password-length")
const max15 = document.querySelector(".max-15")

let password = "";
let password2 = "";

function passwordLength(value) {

    const numericValue = Number(value);

    if (numericValue > 15) {
        max15.innerText = "Password cant be more then 15 characters long"
        setTimeout(() => {
            max15.innerText = "";
        }, 3000)
    }

    return numericValue === 0 ? 15 : numericValue;
}

console.log(passwordLength())

function generatePassword() {
    let password = "";
    let password2 = "";
    let passwordInputValue = passwordLengthInput.value

    while (password.length < passwordLength(passwordInputValue)) {
        const randomNumber = Math.floor(Math.random() * characters.length)
        password += characters[randomNumber]
    }

    while (password2.length < passwordLength(passwordInputValue)) {
        const randomNumber = Math.floor(Math.random() * characters.length)
        password2 += characters[randomNumber]
    }

    passWordBox1.innerText = password;
    passWordBox2.innerText = password2;
}

generateBtn.addEventListener("click", generatePassword)