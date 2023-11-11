$(document).ready(() => {
	// let canvas = document.getElementById('picture');
	let canvas = $('#picture')[0];
	let context = $(canvas).getContext('2d');

	let hover = $('#hover')[0];
	let clicked = $('#clicked')[0];

	let image = new Image();
	image.src = '../img/car.png';

	image.onload = function () {
		canvas.width = image.width;
		canvas.height = image.height;

		context.drawImage(image, 0, 0);
	};

	function setColor(e, destination) {
		let x = e.offsetX < 0 ? 0 : e.offsetX;
		let y = e.offsetY < 0 ? 0 : e.offsetY;

		let pixel = context.getImageData(x, y, 1, 1);
		let red = pixel.data[0];
		let green = pixel.data[1];
		let blue = pixel.data[2];

		let color = `rgba(${red}, ${green}, ${blue}, 1)`;
		destination.style.backgroundColor = color;
	}

	// canvas.addEventListener('mousemove', (e) => {
	//     setColor(e, hover);
	// })

	$(canvas).on('mousemove', (e) => {
		setColor(e, hover);
	});

	// canvas.addEventListener('click', (e) => {
	//     setColor(e, clicked);
	// })

	$(canvas).click((e) => {
		setColor(e, clicked);
	});
});
