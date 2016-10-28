const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

const ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error'
        };
    },

    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },

    componentDidMount: function () {
        let {title, message} = this.props;

        let modalMarkup = (
            <div id="error-modal" className="tiny reveal text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">Okay</button>
                </p>
            </div>
        );

        // After error and invoking modal - app doesn't search, so we should:
        // return string version of JSX code to create DOM elements with jQuery
        // before rendering because of Foundation manipulate with DOM too...
        let $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        let modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },

    render: function () {
        return (
            <div></div>
        );
    }
});

module.exports = ErrorModal;
