[![ID3 Writer logo](https://raw.githubusercontent.com/Jack12816/id3-writer-cli/master/logo.png)]()

ID3 Writer is a small CLI program which wrap the id3-writer library.

[![Gittip](http://img.shields.io/gittip/Jack12816.png)](https://www.gittip.com/Jack12816/)
[![npm Downloads](http://img.shields.io/npm/dm/id3-writer-cli.svg)](https://www.npmjs.org/package/id3-writer-cli)
[![npm Version](http://img.shields.io/npm/v/id3-writer-cli.svg)](https://www.npmjs.org/package/id3-writer-cli)
[![Dependency Status](https://david-dm.org/jack12816/id3-writer-cli.png)](https://david-dm.org/jack12816/id3-writer-cli)

## Features

* Support for many path and file structures
    * Path structures
        * Compilation/Volume
        * Artist/Album
        * Artist/Year - Album
    * File structures
        * Position - Artist - Title
        * Position - Title

## Getting Started

### Installation

    $ npm install -g id3-writer-cli

## Options

```bash
$ id3-writer -h

Usage: id3-writer [OPTION]

  -r, --remove-tags        Remove tags
  -w, --write-tags         Write new tags

  -p, --print-meta         Print out the meta information

  -c, --compilation        Path structure is like Compilation/Volume
  -a, --artist-album       Path structure is like Artist/Album
  -y, --artist-year-album  Path structure is like Artist/Year - Album

  -C, --file-compilation   File structure is like Position - Artist - Title
  -t, --position-track     File structure is like Position - Title

  -h, --help               Display this help
  -v, --version            Show version

Installation: npm install -g id3-writer-cli
Respository:  https://github.com/Jack12816/id3-writer-cli
```

