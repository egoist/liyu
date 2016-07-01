'use strict'
const os = require('os')
const spawn = require('child_process').spawn

module.exports = function (word) {
  if (os.platform() === 'darwin') spawn('say', [word])
}
