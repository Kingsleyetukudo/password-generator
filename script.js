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

function upperCasePassword() {
    if(upperCase.checked) {
        let password = ''
    let passwordLength = rangeLength
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * capitalLetters.length)
        password += capitalLetters[randomPassword]
    }
    showPassword = password
}
    if(lowerCase.checked) {
        let password = ''
    let passwordLength = rangeLength
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * smallLetters.length)
        password += smallLetters[randomPassword]
    }
    showPassword = password
}
    if(numbers.checked) {
        let password = ''
    let passwordLength = rangeLength
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * numArr.length)
        password += numArr[randomPassword]
    }
    showPassword = password
}
    if(symbols.checked) {
        let password = ''
    let passwordLength = rangeLength
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * symbolArr.length)
        password += symbolArr[randomPassword]
    }
    showPassword = password

    } 
    
    if(upperCase.checked && lowerCase.checked) {
        let upperLower = capitalLetters.concat(smallLetters)
        let password = ''
    let passwordLength = rangeLength
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * upperLower.length)
        password += upperLower[randomPassword]
    }
    showPassword = password
        console.log(upperLower, 'upper and lower checked')
    }

    if(upperCase.checked && numbers.checked) {
        let upperLower = capitalLetters.concat(numArr)
        let password = ''
    let passwordLength = rangeLength
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * upperLower.length)
        password += upperLower[randomPassword]
    }
    showPassword = password
        console.log(upperLower, 'upper and lower checked')
    }

    if(upperCase.checked && symbols.checked) {
        let upperLower = capitalLetters.concat(symbolArr)
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * upperLower.length)
            password += upperLower[randomPassword]
        }
        showPassword = password
        console.log(upperLower, 'upper and lower checked')
    }

    if(lowerCase.checked && symbols.checked) {
        let upperLower = smallLetters.concat(symbolArr)
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * upperLower.length)
            password += upperLower[randomPassword]
        }
        showPassword = password
        console.log(upperLower, 'upper and lower checked')
    }

    if(lowerCase.checked && numbers.checked) {
        let upperLower = smallLetters.concat(numArr)
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * upperLower.length)
            password += upperLower[randomPassword]
        }
        showPassword = password
        console.log(upperLower, 'upper and lower checked')
    }

    if(symbols.checked && numbers.checked) {
        let upperLower = symbolArr.concat(numArr)
        let password = ''
        let passwordLength = rangeLength
        for (let i = 0; i < passwordLength; i++) {
            let randomPassword = Math.floor(Math.random() * upperLower.length)
            password += upperLower[randomPassword]
        }
        showPassword = password
        console.log(upperLower, 'upper and lower checked')
    }
    

    if(upperCase.checked && lowerCase.checked && numbers.checked) {
        let upperLower = capitalLetters.concat(smallLetters, numArr)
        let password = ''
    let passwordLength = rangeLength
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * upperLower.length)
        password += upperLower[randomPassword]
    }
    showPassword = password
        console.log(upperLower, 'upper and lower checked')
    }


    if(upperCase.checked && lowerCase.checked && numbers.checked && symbols.checked) {
        let upperLower = capitalLetters.concat(smallLetters, numArr, symbolArr)
        let password = ''
    let passwordLength = rangeLength
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * upperLower.length)
        password += upperLower[randomPassword]
    }
    showPassword = password
        console.log(upperLower, 'upper and lower checked')
    }
}

// console.log(upperCase.checked)

rangeNum.innerHTML = "Password Length: " + rangeValue.value
rangeLength = rangeValue.value

console.log(rangeValue.value, rangeLength, 'hi bro')
rangeValue.oninput = function() {
    // output.innerHTML = this.value;
    rangeNum.innerHTML = "Password Length: " + rangeValue.value
    rangeLength = rangeValue.value
    console.log(rangeLength)
  }

function generatePassword() {
    randomPassword1(capitalLetters, smallLetters)
    // randomPassword1(smallLetters)
    randomPassword2()
    upperCasePassword()
    passwordBox1.innerHTML = showPassword
    // passwordBox2.innerHTML = showPassword2
    console.log(showPassword)
    console.log(showPassword2, rangeLength)

}

passwordBox1.addEventListener("click", function () {
    let copyData = passwordBox1.textContent
    let shoot = navigator.clipboard.writeText(copyData)
    console.log(shoot)
    showPopUp()
})


passwordBox2.addEventListener("click", function () {
    let copyData = passwordBox1.textContent
    let shoot = navigator.clipboard.writeText(copyData)
    console.log(shoot)
    showPopUp()
    
})

function showPopUp() {
    let tooltip = document.getElementById("popup");
    tooltip.classList.add("popup-show")
    console.log(tooltip, 'hello')
    // closePopup()


    setTimeout(function closePopup() {
        let tooltip = document.getElementById("popup");
        tooltip.classList.remove("popup-show")
      }, 3000)
  }

  



function randomPassword1(arr, arr) {
    let password = ''
    let passwordLength = rangeLength
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * arr.length)
        password += arr[randomPassword]
    }
    showPassword = password
}

function randomPassword2() {
    let password = ''
    let passwordLength = 15
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * characters.length)
        password += characters[randomPassword]
    }
    showPassword2 = password
}
