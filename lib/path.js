/**
 * Path reader class
 *
 * @author Hermann Mayer <hermann.mayer92@gmail.com>
 */

var fs = require('fs');
var path = require('path');
var extend = require('extend');

var Modes = require('./path/modes');

/**
 * @constructor
 *
 * @param {String} path - Path to use
 * @param {Object} options - Options object
 */
var Path = function(path, options)
{
    this.path = null;

    // Check if the path exists
    if (!fs.existsSync(path)) {
        throw new ReferenceError('Path "' + path + '" does not exists');
    }

    // Check if the path is a directory
    if (!fs.statSync(path).isDirectory()) {
        throw new ReferenceError('Path "' + path + '" is not a directory');
    }

    this.path = path;

    var defaultOptions = {
        mode: 'ArtistYearAlbum',
        parts: []
    };

    // Extend default options set
    this.options = extend(true, {}, defaultOptions, options);

    // Extend the choosen mode
    this.options = extend(true, this.options, Modes[this.options.mode]);
};

/**
 * Parse the path with the options set.
 *
 * @return {Object} Result hash
 */
Path.prototype.parse = function()
{
    var result = {};
    var parts = this.path.split(path.sep).reverse();

    this.options.parts.forEach(function(config) {

        var part = parts.shift();
        var matches = part.match(config.regex);

        Object.keys(config.parts).forEach(function(key) {

            var keyConfig = config.parts[key];

            try {
                var value = matches[keyConfig.index];
                result[key] = keyConfig.filter(value);
            } catch (e) {
                console.log(matches);
                console.error('No assignment - ' + e);
            }
        });
    });

    return result;
};

module.exports = Path;

