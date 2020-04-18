var headOne = document.querySelector("#one")
var headTwo = document.querySelector("#two")
var headThree = document.querySelector("#three")

headOne.addEventListener("mouseover",function() {
  headOne.textContent = "Mouse currently over"
  headOne.style.color = "red"
})

headOne.addEventListener("mouseout",function(){
  headOne.textContent = "HOVER OVER ME!"
  headOne.style.color = "black"
})

headTwo.addEventListener("click",function() {
  headTwo.textContent = "CLICKED ON!"
  headTwo.style.color = "blue"
})

headThree.addEventListener("dblclick",function() {
  headThree.textContent = "I WAS DOUBLE CLICKED!"
  headThree.style.color = "red"
})
