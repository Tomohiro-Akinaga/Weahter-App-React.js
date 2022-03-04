export async function fetchCurrentWeather(country) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=7d20d69e5d5abc8385c9ae6416019816`)
            .then(res => res.json());
}

export async function fetchHourlyWeather(lat, lon) {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=7d20d69e5d5abc8385c9ae6416019816`)
            .then(res => res.json());
}