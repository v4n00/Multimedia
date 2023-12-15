window.onload = () => {
	navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError);

	function onLocationSuccess(position) {
		console.log(position);
		let lat = position.coords.latitude;
		let long = position.coords.longitude;
		let accuracy = position.coords.accuracy;

		let map = L.map('myMap').setView([lat, long], 13);

		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		}).addTo(map);

		var marker = L.marker([lat, long]).addTo(map);

		var circle = L.circle([lat, long], {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: accuracy,
		}).addTo(map);
	}

	function onLocationError(err) {
		console.log(err);
	}
};
