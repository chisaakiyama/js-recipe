const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0

plusButton.onclick = function(){
   count += 1
   display.textContent = count
 }

 const display = document.getElementById("display")
 const minusButton = document.getElementById("minus-button")

let count = 0

minusButton.onclick = function(){
   count -= 1
   display.textContent = count
 }

 const display = document.getElementById("display")
 const doubleButton = document.getElementById("double-button")

let count = 0

doubleButton.onclick = function(){
   count *= 2
   display.textContent = count
 }