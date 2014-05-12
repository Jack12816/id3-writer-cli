/**
 * Directory reader class
 *
 * @author Hermann Mayer <hermann.mayer92@gmail.com>
 */

var fs = require('fs');

/**
 * @constructor
 */
var Directory = function(path)
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
};

/**
 * Get file list.
 *
 * @param {RegExp} [filter] - Filter to apply
 */
Directory.prototype.getFiles = function(filter)
{
    var files = fs.readdirSync(this.path);

    if (filter) {
        return files.filter(function(file) {
            return filter.test(file);
        });
    }

    return files;
};

module.exports = Directory;

