const restourant = 'gusi-lebedi';

const renderItems = (data) => {
	data.forEach((element) => {
		console.log(element);
	});
};

fetch(`./db/${restourant}.json`)
	.then((response) => response.json())
	.then((data) => {
		renderItems(data);
	});
