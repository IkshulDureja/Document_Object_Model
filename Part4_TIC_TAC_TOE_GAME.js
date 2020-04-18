//Restart Game button
var restart = document.querySelector("#b")


//Grab all the squares
var squares = document.querySelectorAll("td")

//Clear all the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = ' ';
  }
}

restart.addEventListener("click",clearBoard)

// console.log("connected");


//Check the square marker
 // var cellOne = document.querySelector("#one")
 //
 // cellOne.addEventListener("click",function() {
 //   if (cellOne.textContent === "") {
 //     cellOne.textContent = "X"
 //   }else if (cellOne.textContent === "X") {
 //     cellOne.textContent = "O"
 //   }else {
 //     cellOne.textContent = ""
 //   }
 // })



//For loop to add event listeners to all the squares


function changeMarker() {
  if (this.textContent === "") {
this.textContent ="X"
}else if(this.textContent === "X") {
  this.textContent = "O"
}else {
  this.textContent =""
}
}


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click",changeMarker)
}


// console.log("connected");
