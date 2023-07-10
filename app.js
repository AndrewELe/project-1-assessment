//creating the javascript to handle increasing number in html and decreasing number in html
let num = 0
const increase = document.getElementById('#increase')
const decrease = document.getElementById('#decrease')



increase.addEventListener('click', increase)

function increase(){
    displayNum += userInput
    document.querySelector('#number').textContent = number
    document.querySelector('#counter').textContent = displayNum
}

decrease.addEventListener('click', decrease)

function decrease() {
    displayNum -= userInput
    document.querySelector('#number').textContent = number
    //if number is less than 0, change the color to red
    if (number < 0) {
        document.querySelector('#number').style.color = 'red'
    }
    document.querySelector('#counter').textContent = displayNum
}

