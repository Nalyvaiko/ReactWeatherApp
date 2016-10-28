const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=761295697ed3a262de55b9db72f089b7&units=metric';

module.exports = {
    getTemp: function(location) {
        let encodedLocation = encodeURIComponent(location);
        let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                let icon = 'http://openweathermap.org/img/w/' + res.data.weather[0].icon + '.png';
                let temp = res.data.main.temp;

                return {
                    temp: temp,
                    icon: icon
                };
            }
        }, function(res) {
            throw new Error('City not found');
        });
    }
}
