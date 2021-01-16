const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0

plusButton.onclick = function(){
   count += 1
   display.textContent = count
 }

 const minusButton = document.getElementById("minus-button")

minusButton.onclick = function(){
   count -= 1
   display.textContent = count
 }

 const doubleButton = document.getElementById("double-button")

doubleButton.onclick = function(){
   count *= 2
   display.textContent = count
 }

 const plusButton2 = document.getElementById("plus-button2")
 
 plusButton2.onclick = function(){
   count += 1
   display2.textContent = count
 }

const minusButton2 = document.getElementById("minus-button2")

minusButton2.onclick = function(){
  count -= 1
  display2.textContent = count
}

const doubleButton2 = document.getElementById("double-button2")

doubleButton2.onclick = function(){
   count *= 2
   display2.textContent = count
 }
