import test from 'ava'
import liyu from '../lib'

test('main', async t => {
  const res = await liyu('abc', {limit: 1})
  t.is(res[0].definition, '[American] [Born] [Chinese]')
})
