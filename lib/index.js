'use strict'
const api = require('./api')

module.exports = function (word, options) {
  options = options || {}
  const limit = options.limit || 3
  return api
    .fetchWord(word)
    .then(data => data.list.slice(0, limit))
}
