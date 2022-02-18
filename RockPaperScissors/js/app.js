let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');

const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getCompChoice(){
	const choices = ['r','p','s'];
	const randNumber = Math.floor(Math.random() * 3);
	return choices[randNumber];
}
function convertToWord(letter){
	if(letter === 'r') return 'Rock';
	if(letter === 'p') return 'Paper';
	if(letter === 's') return 'Scissors';
}

function win(user,comp){
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	const p1 = 'user'.fontsize(3).sub();
	const p2 = 'comp'.fontsize(3).sub();
	result_div.innerHTML = `${convertToWord(user)}${p1}   beats   ${convertToWord(comp)}${p2}   - You win!`;
	document.getElementById(user).classList.add('green-glow');
	setTimeout(function(){ document.getElementById(user).classList.remove('green-glow')},300);
}
function lose(user,comp){
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore; 
	const p1 = 'user'.fontsize(3).sub();
	const p2 = 'comp'.fontsize(3).sub();
	result_div.innerHTML = `${convertToWord(comp)}${p2}   beats   ${convertToWord(user)}${p1}   - You lose!`;	
	document.getElementById(user).classList.add('red-glow');
	setTimeout(function(){ document.getElementById(user).classList.remove('red-glow')},300);
}
function draw(user,comp){
	const p1 = 'user'.fontsize(3).sub();
	const p2 = 'comp'.fontsize(3).sub();
	result_div.innerHTML = `${convertToWord(user)}${p1}   -   ${convertToWord(comp)}${p2}   - Its a Draw!`;	
	document.getElementById(user).classList.add('gray-glow');
	setTimeout(function(){ document.getElementById(user).classList.remove('gray-glow')},300);
}

function game(userChoice){
	const compChoice = getCompChoice();
	switch(userChoice + compChoice){
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice,compChoice);
			break;
		case 'rp':
		case 'sr':
		case 'ps':
			lose(userChoice,compChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice,compChoice);
			break;
	}
}

function main(){
	rock_div.addEventListener('click',function(){
		game('r');
	});
	
	paper_div.addEventListener('click',function(){
		game('p');
	});

	scissors_div.addEventListener('click',function(){
		game('s');
	});
}
main();