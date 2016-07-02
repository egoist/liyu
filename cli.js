#!/usr/bin/env node
'use strict'
const meow = require('meow')
const Spin = require('io-spin')
const figures = require('figures')
const update = require('update-notifier')
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

update({pkg: cli.pkg}).notify()

const word = cli.input.join(' ')
if (!word) cli.showHelp()

const spin = new Spin('Box1')
spin.start()
say(word)
main(word, cli.flags)
  .then(data => {
    spin.stop()
    if (data.length === 0) {
      console.log(
        `${figures.cross} There aren't any definitions for ${word} yet.`.red +
        `\nCan you define it? ${`http://www.urbandictionary.com/`.underline}`.gray
      )
    } else {
      print(data)
    }
  })
  .catch(e => {
    spin.stop()
    console.log(e.stack)
  })
