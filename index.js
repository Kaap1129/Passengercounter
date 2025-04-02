let count = 0
let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")

function increment() {
    count += 1
    countEL.textContent = count 
}

function decrement() {
    if (count > 0) { // Prevent count from going below 0
        count -= 1
        countEL.textContent = count 
    }
}

function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEL.textContent = 0
    count = 0
}

console.log("Lets Count People On The Subway!")