 
 const input1 = document.querySelector('.change-location');

 const city_Name = document.querySelector('h5');

 const updateUI = (data) =>{
    const cityDetails1 = data.cityDetails;
    const weather1 = data.weather;

    //update html template
    city_Name.innerHTML = `
    <h5 class="my-3 cityName">${cityDetails1.EnglishName}</h5>
            <h4 class="my-3">${weather1.WeatherText}</h4>
            <div class="display-4 my-3">
                <span>${weather1.Temperature.Metric.Value}</span>
                <p>&deg;C</p>
            </div>`;
 };


 const updateCity = async (city) =>{
 
    //Use the await keyword because it return a promise and every promise might take time to oad data from api etc.
    const cityDetials = await getCity(city);
    const weather = await getWeather(cityDetials.Key);

    //return multiples outputs as object
    return {
        cityDetails : cityDetials,
        weather : weather
    }

 };




 input1.addEventListener('submit', e => {
    e.preventDefault();

    //get city value
    let val = input1.city.value.trim();
    input1.reset();

    //update City name in UI
    updateCity(val)
    .then(data => updateUI(data))
    .catch(err => updateUI((err)))

});

