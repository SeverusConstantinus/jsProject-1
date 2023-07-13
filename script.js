"use strict";

let z;
let x;


function randomNumber() {
	const set = [ 2, 3, 4, 5, 6, 7, 8, 9 ];
	return set[Math.floor(Math.random() * set.length)];
}

function executeNumberGeneration() {
	z = randomNumber();
	x = randomNumber();

	document.querySelector('.digitOne').textContent = z;
	document.querySelector('.digitTwo').textContent = x;
	document.querySelector('.input').value = '';	
	document.body.style.backgroundColor = '#EEEEEE';
	document.body.style.transition = '1s';	
};

document.querySelector('.gen').addEventListener('click',function() {
	document.body.style.backgroundColor = '#EEEEEE';
	document.body.style.transition = '1s';
	executeNumberGeneration();
});



document.querySelector('.check').addEventListener('click', function() {
const fieldOfInput = Number(document.querySelector('.input').value);

if(fieldOfInput === z * x) {
	console.log('Correct Answer!');
	document.body.style.backgroundColor = "rgb(23, 207, 23)";
	document.body.style.transition = '1s';
} else {
	console.log('You are the same old song');
	document.body.style.backgroundColor = 'rgb(251, 14, 14)';
}
})

document.addEventListener('keypress', function (e){
	if (e.charCode === 13) {
		document.querySelector('.check').click();
	}
	
	if (e.charCode === 113) {
		// document.querySelector('.gen').click();	}
		executeNumberGeneration();
	}
});
