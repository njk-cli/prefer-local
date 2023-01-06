const test = require('ava').default
const preferLocal = require('.')

const obj = {
  foo: {
    bar: true,
    baz: false,
  },
}

test('true when local is true and global is undefined', (t) => {
  t.true(preferLocal(obj, 'foo.bar'))
})

test('false when local is false and global is undefined', (t) => {
  t.false(preferLocal(obj, 'foo.baz'))
})

test('true when local is true and global is false', (t) => {
  t.true(preferLocal(obj, 'foo.bar', false))
})

test('false when local is false and global is true', (t) => {
  t.false(preferLocal(obj, 'foo.baz', true))
})

test('true when local is undefined and global is true', (t) => {
  t.true(preferLocal(obj, 'foo.bat', true))
})

test('false when local is undefined and global is false', (t) => {
  t.false(preferLocal(obj, 'foo.bat', false))
})
