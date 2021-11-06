// number of squares(maximum)
var numSquares = 6;
// array for colors
var colors = [];
// the picked color 
var pickedColor;

// all elements with class squares
var squares = document.querySelectorAll(".square");
// it is the heading where random color comes, selected by the id
var colorDisplay = document.querySelector("#color-display");
// message comes - correct or try again
var messageDisplay = document.querySelector("#message");
// it is the heading
var h1 = document.querySelector("h1");
// reset button
var resetButton = document.querySelector("#reset");
// hard and easy
var modeButtons = document.querySelectorAll(".mode");
// queryselector selects the 1st one?
var easyButton = document.querySelector(".mode");

// declare init
init();

// use keyword function,
function init(){
    // color display is id of the random pick
    // picked a variable declared above
	colorDisplay.textContent = pickedColor;
    // declare fxn
	setupSquares();
    // decalre fxn
	setupMode();
    // declare fxn
	reset();
}

// resetbutton is declared above as the reset id button
resetButton.addEventListener("click", function() {
	// not the id
    reset();
    // semicolon at end
});

function setupSquares(){
    // squares is variable for square class elements
	for (var i = 0; i < squares.length; i++) {
        // colors is an empty array declared above
        // style.backgroundColor  - does something?
		squares[i].style.backgroundColor = colors[i];
        // clicking on any color
		squares[i].addEventListener("click", function(){
            // store the clicked color
			var clickedColor = this.style.backgroundColor;
            // color compare by ===
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "That's Correct!!";
				resetButton.textContent = "Play Again";
                // passed pickedcolor to changecolors
				changeColors(pickedColor);
			}
			else {
                // sqare becomes equal to background color
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "OOPS! that's wrong";
			}
		});
	}
}

function setupMode(){
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "Easy"){
				numSquares = 3;
			}
			else {
				numSquares = 6;
			}
			reset();
		});
	}
}

function reset() {
    // random 3 numbers generated using random function
	colors = genRandomColors(numSquares);
// choose color return an array of random colors
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#2C8E99";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) { 
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

// once correct is selected change all to that color
function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

// returns colors array with a color
function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
        // to insert in arr, used push
		arr.push(makeColor());
	}
	return arr;
}

// makes the random color using random function
function makeColor() {
	// floor and multiply with uppervalue+1
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}



