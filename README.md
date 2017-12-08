<p align="center">
  Render nested hierarchies based only on values
</p>

<p align="center">
  <a href="http://travis-ci.org/mycaule/patriarchy"><img src="https://api.travis-ci.org/mycaule/patriarchy.svg?branch=master" alt="Build Status"></a>
  <a href="https://david-dm.org/mycaule/patriarchy"><img src="https://david-dm.org/mycaule/patriarchy/status.svg" alt="dependencies Status"></a>
  <a href="https://david-dm.org/mycaule/patriarchy?type=dev"><img src="https://david-dm.org/mycaule/patriarchy/dev-status.svg" alt="devDependencies Status"></a>
  <br>
  <a href="https://www.npmjs.com/package/patriarchy"><img src="https://img.shields.io/npm/v/patriarchy.svg" alt="npm package"></a>
  <a href="https://www.npmjs.com/package/patriarchy"><img src="https://img.shields.io/npm/dw/patriarchy.svg" alt="npm package"></a>
  <a href="https://www.npmjs.com/package/patriarchy"><img src="https://img.shields.io/npm/l/patriarchy.svg" alt="npm package"></a>
  <br>
  <br>
</p>

I wrote this library to pretty print JSON describing identify records. The code is inspired from [archy](https://github.com/substack/node-archy).

## Usage

You can use this as an alternative method to `JSON.stringify` when the fields name are obvious to the reader.

```javascript
console.log(JSON.stringify(obj, null, 2))
```
```
{
  "name": "Katy Perry",
  "description": "American singer-songwriter",
  "image": {
    "contentUrl": "http://t3.gstatic.com/images?q=tbn:ANd9GcQrlKFmaiEtUImNiuD_pqzHPjDcjF4yaRThSFMh-rYuB8snFUfk",
    "url": "https://en.wikipedia.org/wiki/Katy_Perry"
  },
  "detailedDescription": {
    "articleBody": "Katheryn Elizabeth Hudson, known professionally as Katy Perry, is an American singer and songwriter. After singing in church during her childhood, she pursued a career in gospel music as a teenager. ",
    "url": "https://en.wikipedia.org/wiki/Katy_Perry",
    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
  },

  "url": "http://www.katyperry.com/"
}
```

#### JavaScript (browser or Node.js)

```javascript
const patriarchy = require('patriarchy')
console.log(patriarchy(obj))
```
```
Katy Perry
│ American singer-songwriter
│ http://www.katyperry.com/
├── http://t3.gstatic.com/images?q=tbn:ANd9GcQrlKFmaiEtUImNiuD_pqzHPjDcjF4yaRThSFMh-rYuB8snFUfk
│   https://en.wikipedia.org/wiki/Katy_Perry
└── Katheryn Elizabeth Hudson, known professionally as Katy Perry, is an American singer and songwriter. After singing in church during her childhood, she pursued a career in gospel music as a teenager.
    https://en.wikipedia.org/wiki/Katy_Perry
    https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License
```

#### Command-line interface

```bash
$ npx patriarchy "a1: 'hello', b1: { a2: 'world', b2: '!' }"
hello
└── world
    !
```

## Contributions

[Changes and improvements](https://github.com/mycaule/patriarchy/wiki) are welcome! Feel free to fork and open a pull request into `master`.

### Running the tests

You can lint the code and run all unit tests using that script.
```bash
npm test
```

### Publishing
```bash
npm version [patch, minor, major]
npm publish
```

### License
`patriarchy` is licensed under the [Apache 2.0 License](https://github.com/mycaule/patriarchy/blob/master/LICENSE).

## References

* [James Halliday - archy package](https://github.com/substack/node-archy)
