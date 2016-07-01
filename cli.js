#!/usr/bin/env node
'use strict'
const meow = require('meow')
const Spin = require('io-spin')
require('colorful').toxic()
const main = require('./lib')
const print = require('./lib/print')
const say = require('./lib/say')

const cli = meow(`
  Usage:
    liyu <words> [options]

  Options:
    --limit, -l         The max definitions you want in each query
    --version, -v       Output version number
    --help, -h          Output help (You are here!)
`, {
  alias: {
    h: 'help',
    v: 'version',
    l: 'limit'
  }
})

const word = cli.input.join(' ')
if (!word) return cli.showHelp()

const spin = new Spin('Box1')
spin.start()
say(word)
main(word, cli.flags)
  .then(data => {
    spin.stop()
    print(data)
  })
  .catch(e => {
    spin.stop()
    console.log(e.stack)
  })
