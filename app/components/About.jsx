const React = require('react');

const About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Weather application built on React. I have built this for FreeCodeCamp.</p>
            <p>Tools that has been used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react" target="_blank">React</a>
                </li>
                <li>
                    <a href="http://openweathermap.org" target="_blank">Open Weather Map</a>
                </li>
                <li>
                    <a href="https://webpack.github.io/" target="_blank">Webpack</a>
                </li>
            </ul>
        </div>
    );
};

module.exports = About;
