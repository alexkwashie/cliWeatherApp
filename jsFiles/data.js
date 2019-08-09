
class Forcast{
    constructor(){
        this.key = "MqMeA7ZYWrWyHy1XFAAmltSe586cC9E6";
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city) {

        //Use the await keyword because it return a promise and every promise might take time to oad data from api etc.
        const cityDetials = await this.getCity(city);
        const weather = await this.getWeather(cityDetials.Key);

           //return multiples outputs as object
        return {
            cityDetails : cityDetials,
            weather : weather
            }
    }

//Async function to get city information
    async  getCity(city){

    const query = `?apikey=${this.key}&q=${city}`;
    // '?' means adding Api query parameters, '&' means adding another query parameters

    const responds = await fetch(this.cityURI + query); //So this fetches http://dataservice.accuweather.com/locations/v1/cities/search + ?apiKey=${key}&q=${city}`

    //convert data to json
    const data = await responds.json();

        return data[0];
    }

//Async function to get weather information
    async getWeather(id){

        const query = `${id}?apikey=${this.key}`;
    //No '?' for 'id' because its not a query parameter

    const responds = await fetch(this.weatherURI + query); //So this fetches http://dataservice.accuweather.com/locations/v1/ + ${id}?apikey=${key}`

    //convert data to json
    const data = await responds.json();

        return data[0];
    }
}



// getCity('london')
// .then(data => { console.log(getWeather(data.Key))})
// .then(key => console.log(key))
// .catch(err => console.log('error: Error Occurred'));