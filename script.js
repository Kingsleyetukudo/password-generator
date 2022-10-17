let btnGen = document.getElementById("btn").addEventListener('click', generatePassword)

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", ">", ".", "?",
    "/"];

const capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbolArr = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", ">", ".", "?",
    "/"]

const passwordBox1 = document.getElementById("box1")
const passwordBox2 = document.getElementById("box2")
const rangeValue = document.getElementById("range")
let rangeNum = document.getElementById("rangeNum")

let upperCase = document.getElementById("upper-case")
let lowerCase = document.getElementById("lower-case")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")

let showPassword = ''
let showPassword2 = ''
let rangeLength = ''

// function to check if the checkboxs is been check base on the type of password you want to generate!

function upperCasePassword() {
    if (upperCase.checked) {
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * capitalLetters.length)
            password += capitalLetters[randomPassword]
        }
        showPassword = password
    }
    if (lowerCase.checked) {
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * smallLetters.length)
            password += smallLetters[randomPassword]
        }
        showPassword = password
    }
    if (numbers.checked) {
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * numArr.length)
            password += numArr[randomPassword]
        }
        showPassword = password
    }
    if (symbols.checked) {
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * symbolArr.length)
            password += symbolArr[randomPassword]
        }
        showPassword = password

    }

    if (upperCase.checked && lowerCase.checked) {
        let upperLower = capitalLetters.concat(smallLetters)
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * upperLower.length)
            password += upperLower[randomPassword]
        }
        showPassword = password
    }

    if (upperCase.checked && numbers.checked) {
        let upperLower = capitalLetters.concat(numArr)
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * upperLower.length)
            password += upperLower[randomPassword]
        }
        showPassword = password
    }

    if (upperCase.checked && symbols.checked) {
        let upperLower = capitalLetters.concat(symbolArr)
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * upperLower.length)
            password += upperLower[randomPassword]
        }
        showPassword = password
    }

    if (lowerCase.checked && symbols.checked) {
        let upperLower = smallLetters.concat(symbolArr)
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * upperLower.length)
            password += upperLower[randomPassword]
        }
        showPassword = password
    }

    if (lowerCase.checked && numbers.checked) {
        let upperLower = smallLetters.concat(numArr)
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * upperLower.length)
            password += upperLower[randomPassword]
        }
        showPassword = password
    }

    if (symbols.checked && numbers.checked) {
        let upperLower = symbolArr.concat(numArr)
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * upperLower.length)
            password += upperLower[randomPassword]
        }
        showPassword = password
    }


    if (upperCase.checked && lowerCase.checked && numbers.checked) {
        let upperLower = capitalLetters.concat(smallLetters, numArr)
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * upperLower.length)
            password += upperLower[randomPassword]
        }
        showPassword = password
    }


    if (upperCase.checked && lowerCase.checked && numbers.checked && symbols.checked) {
        let upperLower = capitalLetters.concat(smallLetters, numArr, symbolArr)
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * upperLower.length)
            password += upperLower[randomPassword]
        }
        showPassword = password
    } 
}


// password range funcrion!

rangeNum.innerHTML = "Password Length: " + rangeValue.value
rangeLength = rangeValue.value
rangeValue.oninput = function () {
    rangeNum.innerHTML = "Password Length: " + rangeValue.value
    rangeLength = rangeValue.value
}


// Password generator button function!

function generatePassword() {
    // randomPassword1(characters)
    upperCasePassword()
    passwordBox1.innerHTML = showPassword
    console.log(showPassword.length)
    
    if(showPassword.includes("0,1,2,3,4,5,6,7,8,9")) {
        console.log('password has numbers')
    }else {
        console.log('no numbers')
    }
}

// function to copy password to clipboard!
passwordBox2.addEventListener("click", function () {
    let copyData = passwordBox1.textContent
    navigator.clipboard.writeText(copyData)
    showPopUp()

})


// function to open and close the copy notification!

function showPopUp() {
    let tooltip = document.getElementById("popup");
    tooltip.classList.add("popup-show")
    console.log(tooltip, 'hello')


    setTimeout(function closePopup() {
        let tooltip = document.getElementById("popup");
        tooltip.classList.remove("popup-show")
    }, 3000)
}



// function to generate random passwords mix with every characters and symbols!

function randomPassword1(arr) {
    let password = ''
    let passwordLength = rangeLength
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * arr.length)
        password += arr[randomPassword]
    }
    showPassword = password
}

