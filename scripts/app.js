// docment for DOM manipulation

const cityForm = document.querySelector("form");

const updateCity = async (city) => {
    console.log(city);

    const cityDets = await getCity(city); // Dets stands for "details"
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets: cityDets,
        weather: weather,
    };
};

// =============================================================================

cityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(">> submitted", e.target.value);

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update UI with new city
    updateCity(city)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
});
