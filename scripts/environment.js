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
 * Stylizes console logs in node.
 *
 * @since 0.2.0
 */
const color = {
  cyan: value => '\x1b[36m' + value + '\x1b[0m',
  green: value => '\x1b[32m' + value + '\x1b[0m',
  red: value => '\x1b[31m' + value + '\x1b[0m'
}

/**
 * Easily logs custom messages.
 *
 * @since 0.0.1
 */
const log = {
  n: () => console.log(),
  success: message => console.log(color.green(`✔ ${message}`)),
  info: message => console.log(color.cyan(`ℹ ${message}`)),
  details: message => console.log(color.cyan(`  ${message}`)),
  error: message => console.log(color.red(`✖ ${message}`))
}

module.exports = {
  pkg,
  log
}
