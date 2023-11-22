window.onload = function () {
	let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

	let canvas = document.getElementById('game');
	let context = canvas.getContext('2d');

	recognition.lang = 'en-US';
	recognition.interimResults = false;
	recognition.continuous = false;
	recognition.maxAlternatives = 1;

	recognition.start();

	let guess = parseInt(Math.random() * 100);
	let shouldRestart = true;
	// console.log(guess);

	recognition.onend = function () {
		if (shouldRestart) {
			recognition.start();
		}
	};

	recognition.onresult = function (event) {
		// console.log(event);

		let number = parseInt(event.results[0][0].transcript);
		// console.log(number);

		if (number === guess) {
			context.strokeStyle = 'green';
			context.beginPath();
			context.moveTo(8 * number, 0);
			context.lineTo(8 * number, canvas.height);
			context.stroke();

			console.log(number + ' ~ YOU WON!!!');
			shouldRestart = false;
		} else {
			if (number < guess) {
				// draw that area on the canvas
				// restart recognition
				context.fillStyle = 'red';
				context.fillRect(0, 0, 8 * number, canvas.height);

				console.log(number + ' ~ This is too low!');
				shouldRestart = true;
				recognition.stop();
			} else {
				// draw on the canvas
				// restart recognition
				context.fillStyle = 'red';
				context.fillRect(8 * number, 0, canvas.width - 8 * number, canvas.height);

				console.log(number + ' ~ This is too high!');
				recognition.stop();
			}
		}
	};
};
