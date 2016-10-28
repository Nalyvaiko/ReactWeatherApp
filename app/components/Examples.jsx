const React = require('react');
const {Link} = require('react-router');

const Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Kyiv'>Kyiv</Link>
                </li>
                <li>
                    <Link to='/?location=Mexico'>Mexico</Link>
                </li>
                <li>
                    <Link to='/?location=London'>London</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;
