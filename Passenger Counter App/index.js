// document.getElementById("count-el").innerText=5

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el") //pass in arguments
let count = 0 
let saveEl = document.getElementById("save-el")
// 1. Grab the save-el paragrah and store it in a variable called saveEl

function increment() {
    count += 1
    countEl.textContent = count  //instead of .innerText we use .textContent as innerText only shows "human readable" elements
}

function save() {
    let countStr = count + " - "
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
// NB: Make sure to not delete the existing content of the paragraph
     countEl.textContent = 0
     count = 0
}

