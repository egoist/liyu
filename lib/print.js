'use strict'
const figures = require('figures')

module.exports = function (list) {
  console.log(list.map((item, index) => {
    return `
${`[${index}]`.gray} ${item.word.yellow} ${figures.heart.red} ${String(item.thumbs_up).red}
${item.definition}
${`url: ${item.permalink.underline}`.gray}
${`example: ${item.example}`.gray}
`.trim()
  }).join('\n\n'))
}
