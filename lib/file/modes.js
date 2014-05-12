/**
 * File split modes
 *
 * @author Hermann Mayer <hermann.mayer92@gmail.com>
 */

var Modes = {
    filter: {
        trim: function(str) {
            return ('' + str).trim();
        },
        number: function(number) {
            return parseInt(number) || undefined;
        }
    }
};

/**
 * Compilation eg. Position - Artist - Title
 */
Modes.Compilation = {
    regex: /([0-9]+) - (.*) - (.*)/,
    parts: {
        position: {
            index: 1,
            filter: Modes.filter.number
        },
        artist: {
            index: 2,
            filter: Modes.filter.trim
        },
        title: {
            index: 3,
            filter: Modes.filter.trim
        }
    }
};

/**
 * PosTrack eg. Position - Title
 */
Modes.PosTrack = {
    regex: /([0-9]+) - (.*)/,
    parts: {
        position: {
            index: 1,
            filter: Modes.filter.number
        },
        title: {
            index: 2,
            filter: Modes.filter.trim
        }
    }
};

module.exports = Modes;

