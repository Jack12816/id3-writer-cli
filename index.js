// Load and assign modules
var id3 = require('id3-writer');
var writer = new id3.Writer();

var coverImage = new id3.Image('/tmp/y/cover.jpg');
var mp3 = new id3.File('/tmp/y/Test.mp3');

var meta = new id3.Meta({
    artist: 'KrawallBrüder-Teßt',
    album: 'Blüt, Schweisßs & keine Tränen',
    song: 'Solange wir wie Brüder sind',
    track: 9,
    total: 11,
    year: 2012
}, [coverImage]);

writer.setFile(mp3).write(meta, function(err) {

    if (err) {
        // Handle the error
    }

    // Done
});

