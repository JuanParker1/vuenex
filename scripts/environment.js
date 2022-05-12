const chalk = require('chalk')

/**
 * Specifies the package details.
 *
 * @since 0.0.1
 */
const pkg = {
  version: require('../package.json').version,
  name: 'vuenex',
  title: 'VueNex',
  author: 'Ivo Dolenc',
  license: 'MIT',
  homepage: 'https://github.com/ivodolenc/vuenex'
}

/**
 * Custom util for console logs.
 *
 * @since 0.0.1
 */
const log = {
  n: () => console.log(),
  success: message => console.log(chalk.green('✔ ' + message)),
  info: message => console.log(chalk.cyan('ℹ ' + message)),
  details: message => console.log(chalk.cyan(`  ${message}`))
}

/**
 * Outputs package details in the terminal.
 *
 * @since 0.0.1
 *
 * @param {string} success
 * @param {string} info
 * @param {array} details
 */
const useTerminalLogs = (success, info, details) => {
  log.n()
  success ? log.success(success) : null
  info ? log.info(info) : null
  details ? details.forEach(line => log.details(line)) : null
  log.n()
}

module.exports = {
  pkg,
  log,
  useTerminalLogs
}
