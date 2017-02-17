'use strict'
const chalk = require('chalk')
const figures = require('figures')

module.exports = function (list) {
  console.log(list.map((item, index) => {
    return `
${chalk.dim(`[${index}]`)} ${chalk.yellow(item.word)} ${chalk.red(figures.heart)} ${chalk.red(String(item.thumbs_up))}
${item.definition}
${chalk.dim(`url: ${item.permalink.underline}`)}
${chalk.dim(`example: ${item.example}`)}
`.trim()
  }).join('\n\n'))
}
