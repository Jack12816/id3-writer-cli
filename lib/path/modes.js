/**
 * Path split modes
 *
 * @author Hermann Mayer <hermann.mayer92@gmail.com>
 */

var Modes = {
    filter: {
        passthrough: function(el) {
            return el;
        },
        trim: function(str) {
            return ('' + str).trim();
        },
        number: function(number) {
            return parseInt(number) || (new Date()).getFullYear();
        }
    }
};

/**
 * Compilations eg. CompilationName/Volume
 */
Modes.Compilation = {
    parts: [
        {
            regex: /(.*)/,
            parts: {
                volume: {
                    index: 1,
                    filter: Modes.filter.trim
                }
            }
        },
        {
            regex: /(.*)/,
            parts: {
                compilation: {
                    index: 1,
                    filter: Modes.filter.trim
                }
            }
        }
    ]
};

/**
 * ArtistAlbum eg. Artist/Album
 */
Modes.ArtistAlbum = {
    parts: [
        {
            regex: /(.*)/,
            parts: {
                album: {
                    index: 1,
                    filter: Modes.filter.trim
                }
            }
        },
        {
            regex: /(.*)/,
            parts: {
                artist: {
                    index: 1,
                    filter: Modes.filter.trim
                }
            }
        }
    ]
};

/**
 * ArtistYearAlbum eg. Artist/Year - Album
 */
Modes.ArtistYearAlbum = {
    parts: [
        {
            regex: /([0-9]+) - (.*)/,
            parts: {
                year: {
                    index: 1,
                    filter: Modes.filter.number
                },
                album: {
                    index: 2,
                    filter: Modes.filter.trim
                }
            }
        },
        {
            regex: /(.*)/,
            parts: {
                artist: {
                    index: 1,
                    filter: Modes.filter.trim
                }
            }
        }
    ]
};

module.exports = Modes;

