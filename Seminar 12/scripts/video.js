window.onload = () => {
	let video = document.getElementById('video');
	let copyCanvas = document.getElementById('copyCanvas');
	let copyCtx = copyCanvas.getContext('2d');

	navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then(function (stream) {
		video.srcObject = stream;
		video.play();
	});

	video.addEventListener('play', () => {
		render();
	});

	function render() {
		renderCopyCtx();

		requestAnimationFrame(render);
	}

	function renderCopyCtx() {
		copyCtx.drawImage(video, 0, 0);
	}
};
