var numSquares = 9;
var timeleft;
var runs;
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var box = document.getElementById("box");
var Box = document.querySelector("#box");
var score = document.querySelector("#score");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var med = document.querySelector("#med");
var hard = document.querySelector("#hard");
var start = document.querySelector("#start");
var timer = document.querySelector("#timer");

function Easy(){
  med.classList.remove("selected");
  hard.classList.remove("selected");
  easy.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  box.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i];
      square[i].style.display = "block"; 
    } else {
      square[i].style.display = "none";
         
    }
  }
}

function Medium(){
  easy.classList.remove("selected");
  hard.classList.remove("selected");
  med.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  box.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i];
      square[i].style.display = "block";
    } else {
      square[i].style.display = "none";
    }
  }
}

function Hard(){
  easy.classList.remove("selected");
  med.classList.remove("selected");
  hard.classList.add("selected");
  numSquares = 9;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  box.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
      square[i].style.background = colors[i];
      square[i].style.display = "block";
  }
}

function Reset(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from the array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  box.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
  }
}

box.textContent = randomColor();

function Start(){
  start.disabled = true;
  runs = 0;
  score.textContent = runs;
  Reset();
    for(var i = 0; i < square.length; i++) {
        if(timeleft != 0){
  //add initial colors to squares
  square[i].style.background = colors[i];
  //add click listeners to squares
  square[i].addEventListener("click", function() {
    //grab color of picked square
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      runs += 3; 
      score.textContent = runs;
      h1.style.background = clickedColor;
      Box.style.background = clickedColor;
      Reset();
    }
      else{
      runs -= 1;
      score.textContent = runs;
      Reset();
    }
      
      
  })
            
}
      
}
    
}

function Timer(){
    timeleft = 10;
    timer.textContent = timeleft;
    setInterval(function()
    {
        if(timeleft > 0){
        timeleft--;
        timer.textContent = timeleft;
        }
        else{
            alert("your score is\n" + runs);
            timeleft++;
            document.location.reload(true);
        }
    },1000);
    
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
  //make and array
  var arr = []
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
    //get random color and push into array
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0-255
var r = Math.floor(Math.random() * 256)
  //pick a "green" from 0-255
var g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0-255
var b = Math.floor(Math.random() * 256)

return "rgb(" + r +", " + g + ", " + b +")";
}

//function randomGenerate(){
//    var Colour = ["red","yellow","green","orange","blue","purple","grey","pink","brown"];
//    var randomColour = Colour[Math.floor(Math.random() * Colour.length)];
//    return randomColour;
//}