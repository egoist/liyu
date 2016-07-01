'use strict'
const fetch = require('node-fetch')

const api = module.exports = {}

function makeURL(word) {
  return `http://api.urbandictionary.com/v0/define?term=${encodeURIComponent(word)}`
}

api.fetchWord = function (word) {
  return fetch(makeURL(word)).then(res => res.json())
}
