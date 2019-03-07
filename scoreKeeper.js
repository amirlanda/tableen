var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 31;

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var p1Input = document.querySelector("#p1Input");
var p2Input = document.querySelector("#p2Input");

var scoreNavButton = document.querySelector("#scoreNavButton");
var calNavButton = document.querySelector("#calNavButton");
var valNavButton = document.querySelector("#valNavButton");
var rulesNavButton = document.querySelector("#rulesNavButton");
var scoreKeeper = document.querySelector("#scoreKeeper");
var calculatePoints = document.querySelector("#calculatePoints");
var cardValues = document.querySelector("#cardValues");
var rules = document.querySelector("#rules");

scoreNavButton.addEventListener("click", function () {
	var topOfElement = scoreKeeper.offsetTop - 50;
	window.scroll({top: topOfElement});
})

calNavButton.addEventListener("click", function () {
	var topOfElement = calculatePoints.offsetTop - 50;
	window.scroll({top: topOfElement});
})

valNavButton.addEventListener("click", function () {
	var topOfElement = cardValues.offsetTop - 50;
	window.scroll({top: topOfElement});
})

rulesNavButton.addEventListener("click", function () {
	var topOfElement = rules.offsetTop - 50;
	window.scroll({top: topOfElement});
})

p1Input.addEventListener("keyup", function () {
	if (Number(p1Input.value) || event.keyCode === 9) {
		scoreInput();
	}
	else {
		alert("Please enter a number.")
		p1Input.value = "";	
	}
})

p2Input.addEventListener("keyup", function () {
	if (Number(p2Input.value) || event.keyCode === 9) {
		scoreInput();
	}
	else {
		alert("Please enter a number.")
		p2Input.value = "";	
	}
})

function scoreInput() {
	if (!gameOver) {
		if (event.keyCode === 13) {
			p1Score += Number(p1Input.value);
			p2Score += Number(p2Input.value);
			if (p1Score >= winningScore) {
				gameOver = true;
				p1Display.classList.add("winner");
			}
			else if (p2Score >= winningScore) {
				gameOver = true;
				p2Display.classList.add("winner");
			}
			p1Display.textContent = p1Score;
			p1Input.value = "";	
			p2Display.textContent = p2Score;
			p2Input.value = "";	
		}
	}
}

resetButton.addEventListener("click", function() {
	reset();
});


function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
};




