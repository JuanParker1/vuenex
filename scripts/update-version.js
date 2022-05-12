const { execSync } = require('child_process')
const { pkg, useTerminalLogs } = require('./environment')

/**
 * Automatically commits modified files to the Github repository.
 *
 * @since 0.0.1
 */
const updatePackageVersion = () => {
  const gitAdd = `git add package.json`
  const gitCommit = `git commit -m "chore(release): ${pkg.version}"`
  const gitPush = `git push`

  execSync(gitAdd)
  execSync(gitCommit)
  execSync(gitPush)
}

/**
 * Logs details in the terminal.
 *
 * @since 0.0.1
 */
const runTerminalLogs = () => {
  const success = `Package version successfully updated on Github repository! 🙌 `
  const info = `New package version: ${pkg.version}`
  const details = [
    '',
    `Learn more at ${pkg.homepage}`,
    '',
    `@package: ${pkg.title}`,
    `@version: ${pkg.version}`,
    '',
    `@author: ${pkg.author}`,
    `@license: ${pkg.license}`
  ]

  useTerminalLogs(success, info, details)
}

updatePackageVersion()
runTerminalLogs()
