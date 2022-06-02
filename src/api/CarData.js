import axios from "axios";

export function ApiCardData(){
	const options = {
		method: 'GET',
		url: 'https://car-data.p.rapidapi.com/cars',
		params: {limit: '10', page: '0', model: 'elantra'},
		headers: {
		  'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
		  'X-RapidAPI-Key': '302cb51109mshbb577f353623720p17620cjsn56eb6909aaae'
		}
	  };
	  
	  axios.request(options).then(function (response) {
		  console.log(response.data);
	  }).catch(function (error) {
		  console.error(error);
	  });
}

