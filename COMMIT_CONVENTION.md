# Commit Convention 📄

A [specification](https://www.conventionalcommits.org/) that provides a simple set of rules for creating commit messages. Main goal is to keep commits simple, readable, and consistent.

Commit linting is done by [commitlint](https://github.com/conventional-changelog/commitlint) and [husky](https://github.com/typicode/husky). Configuration is extended with [config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) package.

## Structure 🧬

Suggests the general structure of a conventional commit message:

```
# Commit Structure

<type>(<scope>): <message>
  │       │          │
  │       │          └── Commit Message: short description of the code change
  │       │
  │       └── Commit Scope: (optional) common|core|config|elements etc...
  │
  └── Commit Type: build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test
```

## Type 🪧

Indicates the type of commit. Must be one of the following:

- **`build`**: changes that affect the build system or external dependencies
- **`chore`**: changes that don't modify src or test files
- **`ci`**: changes that affect CI (Continuous Integrations) config files and scripts
- **`docs`**: changes that affect the documentation
- **`feat`**: changes that introduce a new feature
- **`fix`**: changes that fix a bug
- **`perf`**: changes that improves code performance
- **`refactor`**: changes that neither fix a bug nor add a feature
- **`revert`**: changes that revert a previous commit
- **`style`**: changes that don't affect code logic (white-spaces, formatting, etc)
- **`test`**: changes that add missing tests or correct existing tests

## Scope 🔍

Specifies the place of the commit change. It's optional.

For example `common`, `core`, `config`, `elements`, `events` etc...

## Message 💬

Describes the code change in a short and clear way.

- use the present tense
- don't capitalize the first letter
- no `.` at the end

## Examples 📂

Here are some examples that follow commit convention:

```
chore: update dependencies
```

```
feat: add new select-color option
```

```
docs: update contact info
```

```
fix: improve search filter
```

```
refactor: move image to public dir
```

```
style: remove whitespace from title
```

See more commit [examples](https://github.com/ivodolenc/vuenex/commits/main).

## Quick Tips 💡

Use `backticks` to highlight content in commit message:

```sh
$ git commit -m 'feat: add new `config` file'
```
