import test from 'ava'
import path from 'path'
import fs from 'fs'
import outlineStroke from './'

const src = `
<svg xmlns="http://www.w3.org/2000/svg" width="506.3" height="506.3" viewBox="0 0 506.3 506.3"><g fill="none" stroke="#202020" stroke-width="16.333" stroke-miterlimit="10"><path d="M122.5 122.5h375.7v375.7H122.5z"/><path d="M122.5 383.8H8.2V8.2h375.6v114.3M310.3 204.2v212.3M416.5 310.3H204.2"/></g></svg>`

const expected = `<svg xmlns="http://www.w3.org/2000/svg" width="506" height="506" viewBox="0 0 506 506" version="1.1">
	<path d="M 0 196 L 0 392 57 392 L 114 392 114 449 L 114 506 309.835 506 L 505.671 506 506.335 419.750 C 506.700 372.313, 506.890 258.350, 506.758 166.500 C 506.625 74.650, 506.397 25.263, 506.250 56.750 L 505.984 114 448.992 114 L 392 114 392 57 L 392 0 196 0 L 0 0 0 196 M 0.490 196.500 C 0.490 304.300, 0.607 348.252, 0.750 294.170 C 0.893 240.089, 0.893 151.889, 0.750 98.170 C 0.607 44.452, 0.490 88.700, 0.490 196.500 M 16.463 17.247 C 16.201 17.936, 16.102 98.825, 16.243 197 L 16.500 375.500 65.246 375.760 L 113.993 376.019 114.246 245.260 L 114.500 114.500 245.260 114.246 L 376.019 113.993 375.760 65.246 L 375.500 16.500 196.220 16.247 C 53.321 16.046, 16.843 16.249, 16.463 17.247 M 131 310.500 L 131 490 310.500 490 L 490 490 490 310.500 L 490 131 310.500 131 L 131 131 131 310.500 M 302 253 L 302 302 253 302 L 204 302 204 310 L 204 318 252.991 318 L 301.981 318 302.241 367.250 L 302.500 416.500 310.241 416.792 L 317.981 417.084 318.241 367.792 L 318.500 318.500 367.792 318.241 L 417.084 317.981 416.792 310.241 L 416.500 302.500 367.250 302.241 L 318 301.981 318 252.991 L 318 204 310 204 L 302 204 302 253 " stroke="none" fill="black" fill-rule="evenodd"/>
</svg>`

test('Converts from string', async t => {
  const res = await outlineStroke(src)
  t.is(res, expected)
})

test.cb('Converts from Buffer', t => {
  fs.readFile('./src.svg', (err, data) => {
    outlineStroke(data).then(res => {
      t.is(res, expected)
      t.end()
    })
  })
})

// test('Converts from file', async t => {
//   const res = await outlineStroke(path.resolve('src.svg'))
//   t.is(res, expected)
// })
