window.onload = () => {
	let songs = [
		{
			img: './img/ageofvillains.png',
			release_date: 'March 2020',
			title: 'The Age of Villains',
			link: 'https://open.spotify.com/album/3Rhg6Sxi8S1etCvaU4rUs8',
		},
		{
			img: './img/shadowcorpse.png',
			release_date: 'August 2015',
			title: 'Shadow Corps[e]',
			link: 'https://open.spotify.com/album/7skCUaiVoiT0ANDkQ6xTu1',
		},
		{
			img: './img/hadesworld.png',
			release_date: 'December 2014',
			title: 'Hades: The Other World',
			link: 'https://open.spotify.com/album/2or8XIqqLl27f0UpfURNQt',
		},
		{
			img: './img/paxvesania.png',
			release_date: 'March 2013',
			title: 'Pax Vesania',
			link: 'https://open.spotify.com/album/5CbR8ON5LyfqRdOfIcMTUh',
		},
		{
			img: './img/gothiclolitaagitator.png',
			release_date: 'December 2010',
			title: 'Gothic Lolita Agitator',
			link: 'https://open.spotify.com/album/2Bt0h8xy7itcOaOHIsPI2p',
		},
		{
			img: './img/gothiclolitadoctrine.png',
			release_date: 'August 2009',
			title: 'Gothic Lolita Doctrine',
			link: 'https://open.spotify.com/album/7w0iQDqdVFt6hTztRadusM',
		},
		{
			img: './img/metanoia.png',
			release_date: 'November 2007',
			title: 'Metanoia',
			link: 'https://open.spotify.com/album/2mw4IAu2EIdMZFXOMdmnkq',
		},
		{
			img: './img/gothiclolitapropaganda.png',
			release_date: 'April 2007',
			title: 'Gothic Lolita Propaganda',
			link: 'https://open.spotify.com/album/3WIezWfaKMWpusoSvs67YD',
		},
		{
			img: './img/stigma.png',
			release_date: 'November 2005',
			title: 'Stigma',
			link: 'https://open.spotify.com/track/1MXWFjXbi75jmrpBPjQwln',
		},
	];
	console.log(songs);
	const row = document.getElementById('main-row');

	for (let i = 0; i < songs.length; i++) {
		let col = document.createElement('div');
		col.classList = 'col-sm-6 col-md-4 col-lg-3 col-xl-2 col-12';

		let card = document.createElement('div');
		card.classList = 'card';

		let image = document.createElement('img');
		image.classList = 'card-img-top';
		image.setAttribute('src', songs[i]['img']);

		let cardbody = document.createElement('div');
		cardbody.classList = 'card-body';

		let cardtitle = document.createElement('h5');
		cardtitle.classList = 'card-title';
		let cardtitlename = document.createTextNode(songs[i]['title']);
		cardtitle.append(cardtitlename);
		cardbody.appendChild(cardtitle);

		let cardsubtitle = document.createElement('h6');
		cardsubtitle.classList = 'card-subtitle mb-2 text-body-secondary';
		let cardsubtitlename = document.createTextNode('Released ' + songs[i]['release_date']);
		cardsubtitle.append(cardsubtitlename);
		cardbody.appendChild(cardsubtitle);

		let a = document.createElement('a');
		a.setAttribute('href', songs[i]['link']);
		a.style = 'text-decoration: none;';
		a.classList = 'card-link';
		let aimg = document.createElement('img');
		aimg.src = './img/spotify.png';
		aimg.setAttribute('height', '25px');
		aimg.setAttribute('width', '25px');
		aimg.style = 'margin-right: 5px;';
		a.append(aimg);
		let aname = document.createTextNode('Spotify');
		a.append(aname);
		cardbody.appendChild(a);

		card.appendChild(image);
		card.appendChild(cardbody);
		col.appendChild(card);
		row.appendChild(col);
	}
};
