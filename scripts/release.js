const { execSync } = require('child_process')
const inquirer = require('inquirer')
const { pkg, log } = require('./environment')

/**
 * Automatically commits modified files to the Github repository.
 *
 * @since 0.0.1
 */
const commitChanges = () => {
  const getNewVersion = execSync(`node -p "require('./package.json').version"`)
  const newVersion = getNewVersion.toString().trim()
  const commands = `git add package.json && git commit --no-verify -m 'chore(release): ${newVersion}' && git push --no-verify && npm publish --userconfig=~/.npmrc`

  const success = `Package version successfully updated and pushed to Github repository! 🥳 `
  const info = `New package version: ${newVersion}`
  const details = [
    '',
    `Learn more at ${pkg.homepage}`,
    '',
    `@package: ${pkg.title}`,
    `@version: ${newVersion}`,
    '',
    `@author: ${pkg.author}`,
    `@license: ${pkg.license}`
  ]

  execSync(commands)

  log.n()
  log.success(success)
  log.info(info)
  details.forEach(line => log.details(line))
  log.n()
}

/**
 * Provides an interactive solution for selecting a new version via terminal.
 *
 * @since 0.2.0
 */
const updateVersion = () => {
  log.n()
  log.info(`Current version: ${pkg.version}`)

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'version',
        message: 'Select new version:',
        choices: [
          { name: 'Patch', value: 'patch' },
          { name: 'Minor', value: 'minor' },
          { name: 'Major', value: 'major' }
        ]
      }
    ])
    .then(answers => {
      // Updates packageversion via 'yarn version'
      execSync(`yarn version --no-git-tag-version --${answers.version}`)

      // Commits changes to github and publishes to npm
      commitChanges()
    })
}

updateVersion()
