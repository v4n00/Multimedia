window.onload = () => {
	let video = document.getElementById('video');
	let copyCanvas = document.getElementById('copyCanvas');
	let copyCtx = copyCanvas.getContext('2d');
	let inverseCanvas = document.getElementById('inverseCanvas');
	let inverseCtx = inverseCanvas.getContext('2d');
	let filterCanvas = document.getElementById('filterCanvas');
	let filterCtx = inverseCanvas.getContext('2d');

	navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then(function (stream) {
		video.srcObject = stream;
		video.play();
	});

	video.addEventListener('play', () => {
		render();
	});

	function render() {
		renderCopyCtx();
		renderInverseCtx();
		renderFilterCtx();

		requestAnimationFrame(render);
	}

	function renderCopyCtx() {
		copyCtx.drawImage(video, 0, 0);
	}

	function renderInverseCtx() {
		let frame = copyCtx.getImageData(0, 0, copyCanvas.width, copyCanvas.height);

		for (let i = 0; i < frame.data.length; i += 4) {
			let red = frame.data[i];
			let green = frame.data[i + 1];
			let blue = frame.data[i + 2];

			frame.data[i] = 255 - red;
			frame.data[i + 1] = 255 - green;
			frame.data[i + 2] = 255 - blue;
		}

		inverseCtx.putImageData(frame, 0, 0);
	}

	function renderFilterCtx() {
		let frame = copyCtx.getImageData(0, 0, copyCanvas.width, copyCanvas.height);

		for (let i = 0; i < frame.data.length; i += 4) {
			let red = frame.data[i];
			let green = frame.data[i + 1];
			let blue = frame.data[i + 2];

			if (red < 80 && blue < 50 && green > 50) {
				frame.data[i + 3] = 0;
			}
		}

		filterCtx.putImageData(frame, 0, 0);
	}
};
