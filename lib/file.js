/**
 * File reader class
 *
 * @author Hermann Mayer <hermann.mayer92@gmail.com>
 */

var fs = require('fs');
var path = require('path');
var extend = require('extend');

var Modes = require('./file/modes');

/**
 * @constructor
 *
 * @param {Object} options - Options object
 */
var File = function(options)
{
    var defaultOptions = {
        mode: 'PosTrack',
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
 * @param {String} filename - Filename to work on
 * @return {Object} Result hash
 */
File.prototype.parse = function(filename)
{
    var self = this;
    var result = {};

    filename = path.basename(filename, path.extname(filename));

    var matches = filename.match(this.options.regex);

    Object.keys(this.options.parts).forEach(function(key) {

        var keyConfig = self.options.parts[key];

        try {
            var value = matches[keyConfig.index];
            result[key] = keyConfig.filter(value);
        } catch (e) {
            console.log(matches);
            console.error('No assignment - ' + e);
        }
    });

    return result;
};

module.exports = File;

