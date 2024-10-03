// Import the characters array from characters.js
import { characters } from "./characters.js";

// Get references to DOM elements
const generateBtn = document.getElementById("generate-btn");
const passWordBox1 = document.getElementById("password-box1");
const passWordBox2 = document.getElementById("password-box2");
const passwordLengthInput = document.getElementById("password-length");
const max15 = document.querySelector(".max-15");

// Function to determine password length with validation
function passwordLength(value) {
    const numericValue = Number(value);

    if (numericValue > 15) {
        max15.innerText = "Password can't be more than 15 characters long.";
        setTimeout(() => {
            max15.innerText = "";
        }, 3000);
    }

    return numericValue === 0 ? 15 : numericValue;
}

// Function to generate a single password
function generateSinglePassword(length) {
    let password = "";
    while (password.length < length) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        password += characters[randomNumber];
    }
    return password;
}

// Function to generate both passwords
function generatePassword() {
    const passwordInputValue = passwordLengthInput.value;

    if (passwordInputValue <= 15) {
        const length = passwordLength(passwordInputValue);
        const password1 = generateSinglePassword(length);
        const password2 = generateSinglePassword(length);

        passWordBox1.innerText = password1;
        passWordBox2.innerText = password2;
    } else {
        passwordLength(16);
    }
}

// Function to copy text to clipboard
async function copyToClipboard(text, boxElement) {
    try {
        await navigator.clipboard.writeText(text);
        showCopyConfirmation(boxElement);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

// Function to show a temporary confirmation message
function showCopyConfirmation(boxElement) {
    const originalText = boxElement.innerText;
    boxElement.innerText = "Copied!";
    boxElement.style.backgroundColor = "#4ADF86";
    boxElement.style.color = "#1C1C1C";

    setTimeout(() => {
        boxElement.innerText = originalText;
        boxElement.style.backgroundColor = "#273549";
        boxElement.style.color = "#fff";
    }, 500
    );
}

// Event listener for the generate button
generateBtn.addEventListener("click", generatePassword);

// Event listeners for copying passwords on click
passWordBox1.addEventListener("click", () => {
    const password = passWordBox1.innerText;
    if (password) {
        copyToClipboard(password, passWordBox1);
    }
});

passWordBox2.addEventListener("click", () => {
    const password = passWordBox2.innerText;
    if (password) {
        copyToClipboard(password, passWordBox2);
    }
});
