//input alphabet as string
// declare var for numbers
// give condition for each check box option
// use regex to filter out numbers and specail character
//loop through it 
// add listerner to it
let input = document.querySelector('input')
let lower_alphabet = document.querySelector('.lower_alphabet');
let numbers = document.querySelector('.number');
let specailChar = document.querySelector ('.char');
let upper_alphabet = document.querySelector('.upper_alphabet')
let characters = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=';
let lower = 'abcdefghijklmnopqrstuvwxyz'
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let num = '124567890'
let char = '!@#$%^&*()_=+'
let button = document.querySelector('button');
let para = document.querySelector('p');
let chars = ''

function generate(){
    let length = document.querySelector('.length').value;
    let result = ''; 
    // result += characters.charAt(Math.floor(Math.random()*characters.length));
    // result += characters[Math.floor(Math.random()* characters.length)]
    if (lower_alphabet.checked){
        chars += lower
        // result += lower[Math.floor(Math.random()* lower.length)]
    }
    else{
        let regex = /[^a-z]/g
        chars = chars.match(regex).join('')
    }
    if(numbers.checked){
        chars += num
    }
        else{
            let regex = /[^0-9]/g
            chars = chars.match(regex).join('')
        }
        // result += num[Math.floor(Math.random()* num.length)]
    if (specailChar.checked){
        chars += char
        // result += result += char[Math.floor(Math.random()* char.length)]
    }
    if (upper_alphabet.checked){
        chars += upper
        // result += upper[Math.floor(Math.random()* upper.length)]
    }
        else{
            let regex = /[^A-Z]/g
            chars = chars.match(regex).join('')
        }
    for (let x = 0; x < length; x++){
        result += chars[Math.floor(Math.random()* chars.length)]

        
    
    }
            // result = 'choose the type of password to generate'
    
    para.textContent = result
}
button.addEventListener('click', generate)