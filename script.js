"use strict";
let z = 1;
let x = 1;
document.querySelector('.gen').addEventListener('click',function(){
document.body.style.backgroundColor = '#EEEEEE';
document.body.style.transition = '1s';
z = Math.trunc(Math.random()*9)+1;
x = Math.trunc(Math.random()*9)+1; 
document.querySelector('.digitOne').textContent =z;
document.querySelector('.digitTwo').textContent = x;
document.querySelector('.input').value = '';
});
document.querySelector('.check').addEventListener('click', function(){
const fieldOfInput = Number(document.querySelector('.input').value);
if(fieldOfInput === z*x){
	console.log('Correct Answer!');
	document.body.style.backgroundColor = "rgb(23, 207, 23)";
	document.body.style.transition = '1s';
}else{
	console.log('You are the same old song');
	document.body.style.backgroundColor = 'rgb(251, 14, 14)';
}
})