window.onload = () => {
	let canvas = document.getElementById('game');
	let context = canvas.getContext('2d');

	let guess = document.getElementById('guess');
	let tryButton = document.getElementById('try');
	let status = document.getElementById('status');

	// current letters

	let word = 'multimedia'.toUpperCase();
	let solution = '----------'.split('');
	status.value = solution.join('');
	let fails = 0;

	function drawHead() {
		context.beginPath();
		context.arc(400, 200, 50, 0, Math.PI * 2);
		context.stroke();
	}
	function drawBody() {
		context.beginPath();
		context.moveTo(400, 250);
		context.lineTo(400, 550);
		context.stroke();
	}
	function drawLeftArm() {
		context.beginPath();
		context.moveTo(400, 300);
		context.lineTo(300, 350);
		context.stroke();
	}
	function drawRightArm() {
		context.beginPath();
		context.moveTo(400, 300);
		context.lineTo(500, 550);
		context.stroke();
	}

	let steps = [drawHead, drawBody, drawLeftArm, drawRightArm];

	function mask(currentLetter) {
		for (let i = 0; i < word.length; i++) {
			if (word[i] == currentLetter) {
				solution[i] = currentLetter;
			}
		}
	}

	tryButton.addEventListener('click', () => {
		let currentLetter = guess.value.toUpperCase();
		guess.value = '';
		if (solution.join() === word) {
			alert('You won!');
		}
		if (word.indexOf(currentLetter) > -1) {
			mask(currentLetter);
			status.value = solution.join('');
		} else {
			if (fails === steps.length) {
				alert('You lost!');
			}
			steps[fails++]();
		}
	});
};
