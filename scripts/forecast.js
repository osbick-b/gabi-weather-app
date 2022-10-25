const key = "4sfZy1TquwWgfOjZMGWpyUz8vRWeGGlq";

// http://dataservice.accuweather.com/locations/v1/cities/search // Locations API

// http://dataservice.accuweather.com/currentconditions/v1/{id} // City Conditions API



// ===  GET WEATHER INFO ==========================================================================
const getWeather = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    console.log(`in getWeather`, data);
    return data[0];
};


// ===  GET CITY INFO
const getCity = async (city) => {
    const base =
        "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query); //returns a promise
    const data = await response.json();

    console.log(`in getCity`, data[0]);
    console.log(`data[0].Key`, data[0].Key);
    return data[0]; //returns obj -> 1st city match
};



// !=============================================================================

// getCity("berlin")
//     .then((data) => {
//         console.log(`data from getCity aka data[0]`, data);
//         console.log(`data.Key`, data.Key);
//         return getWeather(data.Key);
//     })
//     .then((data) => {
//         console.log(`data`, data);
//     })
//     .catch((error) => console.log(error));

// // getWeather("178087");
