
 const input1 = document.querySelector('.change-location');

 const city_Name = document.querySelector('.detail');

    const card = document.querySelector('.card');

    const time = document.querySelector('.time');
    const icon = document.querySelector('.icon');

//STEP-3
 const updateUI = (data) =>{

    if(!data){
        console.log(data);
    }else{
    const cityDetails1 = data.cityDetails;
    const weather1 = data.weather;

    //update html template
    city_Name.innerHTML = `
    <h5 class="my-3 cityName">${cityDetails1.EnglishName}, ${cityDetails1.Country.EnglishName}</h5>
            <h4 class="my-3">${weather1.WeatherText}</h4>
            <div class="display-4 my-4">
                <span>${weather1.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>`;

                //remove d-none class
            if(card.classList.contains('d-none')){
                card.classList.remove('d-none');
            };

            //add icon and Imag here
            let dayType = null;


            if (weather1.IsDayTime){
                dayType = 'img/dayy.gif';
            }else{
                dayType = 'img/nig.gif';
            };

            time.setAttribute('src', dayType);

            let icon_img = weather1.WeatherIcon;

            icon.innerHTML = `<img src="img/icons/${icon_img}.svg">`;
        };

 };

//STEP-2
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


//STEP-1
 input1.addEventListener('submit', e => {
    e.preventDefault();


    //get city value
    let val = input1.city.value.trim();

    if(!val){
        alert("Please enter a valid city name. Example 'london'.")
    }else{
        input1.reset();

    }


    //update City name in UI
    updateCity(val)
    .then(data => updateUI(data))
    .catch(err => updateUI(err),alert("Please enter a valid city name. Example 'london'.")

});

