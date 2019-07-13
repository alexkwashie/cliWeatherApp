
const key = "MqMeA7ZYWrWyHy1XFAAmltSe586cC9E6";

const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${city}`;
    // '?' means adding a list of other Api parameters, '&' means adding filter

    const responds = await fetch(base + query); //So this fetches http://dataservice.accuweather.com/locations/v1/cities/search + ?apiKey=${key}&q=${city}`

    //convert data to json
    const data = await responds.json();

return data[0];

};


getCity('london')
.then(data => console.log(data))
.catch(err => console.log('error: Error Occurred'));
