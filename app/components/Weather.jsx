const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false,
            errorMessage: undefined
        };
    },

    handleSearch: function(location) {
        let that = this;

        this.setState({
            location: undefined,
            temp: undefined,
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function(e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },

    componentDidMount: function() {
        // In Router there is a lot of props - query.location
        // in URL location can be setted in Example page
        let location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);

            // clean URL for the start page
            window.location.hash = '#/';
        }
    },

    // for top-bar-right search location Nav.jsx
    componentWillReceiveProps: function (newProps) {
        let location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },

    render: function () {
        let {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center" >Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} />;
            }
        }

        function renderError () {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage} />
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
