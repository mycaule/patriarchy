import test from 'ava'

const patriarchy = require('./index')

test('Patriarchy', t => {
  const obj = {
    result: {
      name: 'Katy Perry',
      description: 'American singer-songwriter',
      image: {
        contentUrl: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQrlKFmaiEtUImNiuD_pqzHPjDcjF4yaRThSFMh-rYuB8snFUfk',
        url: 'https://en.wikipedia.org/wiki/Katy_Perry'
      },
      detailedDescription: {
        articleBody: 'Katheryn Elizabeth Hudson, known professionally as Katy Perry, is an American singer and songwriter. After singing in church during her childhood, she pursued a career in gospel music as a teenager. ',
        url: 'https://en.wikipedia.org/wiki/Katy_Perry',
        license: 'https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License'
      },
      url: 'http://www.katyperry.com/'},
    resultScore: 841.00824
  }
  console.log(JSON.stringify(obj.result, null, 2))

  console.log(patriarchy(obj.result))

  t.is(patriarchy(obj.result), `Katy Perry
│ American singer-songwriter
│ http://www.katyperry.com/
├── http://t3.gstatic.com/images?q=tbn:ANd9GcQrlKFmaiEtUImNiuD_pqzHPjDcjF4yaRThSFMh-rYuB8snFUfk
│   https://en.wikipedia.org/wiki/Katy_Perry
└── Katheryn Elizabeth Hudson, known professionally as Katy Perry, is an American singer and songwriter. After singing in church during her childhood, she pursued a career in gospel music as a teenager. 
    https://en.wikipedia.org/wiki/Katy_Perry
    https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License
`)
})
