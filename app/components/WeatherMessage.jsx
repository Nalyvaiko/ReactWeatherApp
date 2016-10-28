const React = require('react');

const WeatherMessage = ({temp, location, icon}) => {
    return (
        <h4 className="text-center"><img src={icon} alt="icon"/> {temp}°C in {location}.</h4>
    );
};

module.exports = WeatherMessage;
