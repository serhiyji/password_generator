document.addEventListener("DOMContentLoaded", () => {
    const passwordOutput = document.getElementById("password-output");
    const copyBtn = document.getElementById("copy-btn");
    const lengthInput = document.getElementById("length");
    const lengthValue = document.getElementById("length-value");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");
    const generateBtn = document.getElementById("generate-btn");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+={}[];<>:";

    function generatePassword() {
        let length = parseInt(lengthInput.value);
        let characterPool = "";
        
        if (lowercaseCheckbox.checked) characterPool += lowercaseChars;
        if (uppercaseCheckbox.checked) characterPool += uppercaseChars;
        if (numbersCheckbox.checked) characterPool += numbersChars;
        if (symbolsCheckbox.checked) characterPool += symbolsChars;

        if (characterPool.length === 0) {
            passwordOutput.value = "Select options";
            return;
        }
        
        let password = "";
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * characterPool.length);
            password += characterPool[randomIndex];
        }
        
        passwordOutput.value = password;
    }

    generateBtn.addEventListener("click", generatePassword);
    lengthInput.addEventListener("input", () => {
        lengthValue.textContent = lengthInput.value;
    });
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(passwordOutput.value).then(() => {
            copyBtn.textContent = "Copied!";
            setTimeout(() => { copyBtn.textContent = "Copy"; }, 1000);
        });
    });

    generatePassword();
});
