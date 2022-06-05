function criaLinha(cars) {
	linha = document.createElement("tr");

	make = document.createElement("td");
	model = document.createElement("td");
	cylinders = document.createElement("td");
	year = document.createElement("td");
	transmission = document.createElement("td");
	fuel_type=document.createElement("td");

	make.innerHTML = cars.make;
	model.innerHTML = cars.model;
	cylinders.innerHTML = cars.cylinders;
	year.innerHTML = cars.year;
	transmission.innerHTML = cars.transmission;
	transmission.innerHTML = cars.transmission;

	linha.appendChild(make);
	linha.appendChild(model);
	linha.appendChild(cylinders);
	linha.appendChild(year);
	linha.appendChild(transmission);
	linha.appendChild(transmission);

	return linha;
}


function ApiCardData(fabricante) {
	alert("Eu sou um alert 2!");

	const options = {
		method: 'GET',
		url: 'https://api.api-ninjas.com/v1/cars?limit=30&make=' + fabricante,
		headers: {
			'X-Api-Key': 'QC4+leFexAHBjfM5Q+fpog==FgGtErKDP9ALE2VC'
		},
	};

	axios.request(options).then(function (response) {
		let cars = response.data;
		let tabela = document.getElementById("tabela")
		cars.forEach(element => {
			
			let linha = criaLinha(element);
			tabela.appendChild(linha);
		});
		
	}).catch(function (error) {
		console.error(error);
	});


}

