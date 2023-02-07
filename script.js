let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*()_-+={[}]^?/:;.,'
let newPasswd = [] // If this variable is a string instead of an array, it will return "undefined" for the first generation. It's a simple fix.

const pwGenerate = document.querySelector('#generate')
const unorderedList = document.querySelector('#list-passwds')

pwGenerate.addEventListener('click', genPasswords)

// Function to generate passwords
function genPasswords(){
    const passwd = document.querySelector('#qtity').value
    regex = /\D/g // Regex to discount any letters and symbols, I might update this.
    let numPasswd = passwd.replace(regex, '')
    Number(numPasswd)
    if(numPasswd > 10 || numPasswd <= 0 || passwd == ""){
        unorderedList.textContent = 'Invalid input!'
    } else{
        unorderedList.textContent = ''
        const charArr = char.split("")
        // This first for loop adds a new password on the ul element.
        for(let i = 0; i < numPasswd; i++){ 
            // This second for loop runs through the "char" string to add a new random character into the "newPasswd" array. 
            for(let j = 0; j < 9; j++){ 
                let charIndex = Math.floor(Math.random() * charArr.length)
                newPasswd += charArr[charIndex]
            }
        const listItem = document.createElement("li")
        listItem.textContent = `${newPasswd}`
        unorderedList.append(listItem)
        newPasswd = '' // Resets the ul every time the generate button is clicked.
        }
    }
}