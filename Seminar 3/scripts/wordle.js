window.onload = () => {
	const board = document.getElementById('board');
	const submitButton = document.getElementById('submitGuess');
	const input = document.getElementById('guess');
	const retryButton = document.getElementById('retry');

	let currentGuess = 0;
	let word = 'media';
	let wordArray = word.split('');

	for (let i = 0; i < 6; i++) {
		let row = document.createElement('div');
		row.classList = 'row';
		board.appendChild(row);

		for (let j = 0; j < 5; j++) {
			let cell = document.createElement('div');
			cell.classList = 'cell';
			cell.setAttribute('data-row', i);
			cell.setAttribute('data-column', j);
			row.appendChild(cell);
		}
	}

	retryButton.addEventListener('click', () => {
		location.reload();
	});

	submitButton.addEventListener('click', () => {
		let guess = String(input.value);

		if (guess.length != 5 || /\d/.test(guess)) return;

		if (guess === word) {
			for (let i = currentGuess; i < 6; i++) {
				for (let j = 0; j < 5; j++) {
					let currentCell = document.querySelector(`[data-row="${i}"][data-column="${j}"]`);
					currentCell.classList = 'green cell';
				}
			}
			alert('You won!');
		}

		for (let i = 0; i < 5; i++) {
			let currentLetter = guess[i];
			let currentCell = document.querySelector(`[data-row="${currentGuess}"][data-column="${i}"]`);

			let textNode = document.createTextNode(currentLetter);
			currentCell.append(textNode);

			if (currentLetter === wordArray[i]) {
				currentCell.classList = 'green cell';
			} else {
				if (wordArray.indexOf(currentLetter) > -1) {
					currentCell.classList = 'yellow cell';
				} else {
					currentCell.classList = 'red cell';
				}
			}
		}
		currentGuess++;
	});

	input.addEventListener('keypress', function (event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			document.getElementById('submitGuess').click();
		}
	});
};
