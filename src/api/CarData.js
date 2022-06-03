function criaLinha(cars){
	linha = document.createElement("tr");

	tdId = document.createElement("td");
	tdYear = document.createElement("td");
	tdMake = document.createElement("td");
	tdModel = document.createElement("td");
	tdType = document.createElement("td");

	tdId.innerHTML = cars.id;
	tdYear.innerHTML = cars.year;
	tdMake.innerHTML = cars.make;
	tdModel.innerHTML = cars.model;
	tdType.innerHTML = cars.type;

	linha.appendChild(tdId);
	linha.appendChild(tdYear);
	linha.appendChild(tdMake);
	linha.appendChild(tdModel);
	linha.appendChild(tdType);

	return linha;
}

function ApiCardData(){
	alert("Eu sou um alert!");
	
		const options = {
		method: 'GET',
		url: 'https://car-data.p.rapidapi.com/cars',
		params: {limit: '50', page: '0'},
		headers: {
		  'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
		  'X-RapidAPI-Key': '302cb51109mshbb577f353623720p17620cjsn56eb6909aaae'
		}
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

