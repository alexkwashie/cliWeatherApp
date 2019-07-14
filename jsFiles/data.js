
const key = "MqMeA7ZYWrWyHy1XFAAmltSe586cC9E6";

//get weather information
const getWeather = async (id)=>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const query = `${id}?apikey=${key}`;
    //No '?' for 'id' because its not a query parameter

    const responds = await fetch(base + query); //So this fetches http://dataservice.accuweather.com/locations/v1/ + ${id}?apikey=${key}`

    //convert data to json
    const data = await responds.json();

return data[0];

};
 

//Async function to get city information
const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${city}`;
    // '?' means adding Api query parameters, '&' means adding another query parameters

    const responds = await fetch(base + query); //So this fetches http://dataservice.accuweather.com/locations/v1/cities/search + ?apiKey=${key}&q=${city}`

    //convert data to json
    const data = await responds.json();

return data[0];

};



// getCity('london')
// .then(data => { return getWeather(data.Key)})
// .then(key => console.log(key))
// .catch(err => console.log('error: Error Occurred'));
