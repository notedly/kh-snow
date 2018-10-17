// engine.js

var createElement = require('react').createElement;
var renderToString = require('react-dom/server').renderToString;

/**
 * Templating engine for Express.
 *
 * @param {String} filepath
 * @param {Object} props
 * @param {Function} callback
 */
function engine(filepath, props, callback) {
    try {
        var Component = require(filepath);
        // first argument is the error
        // second argument is the rendered view (html)
        callback(null, renderToString(createElement(Component, props)));
    } catch (error) {
        callback(error);
    }
}

module.exports = engine;