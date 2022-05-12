<br>
<br>

<p align="center">
    <img src=".assets/vuenex-logo.svg" width="150">
</p>

<h1 align="center">VueNex</h1>

<p align="center">Custom solutions for Vue projects.</p>

<br>

## Quick Start 🧑‍💻

To install `vuenex` simply run (_yarn_ or _npm_):

```bash
yarn add -D vuenex
```

```bash
npm i -D vuenex
```

## Composables 🛠

### Elements

- [useBlur](src/elements/useBlur/) **(Function)** → Removes `focus` from a specific element.
- [useFocus](src/elements/useFocus/) **(Function + Directive)** → Sets `focus` on a specific element.
- [useVisibility](src/elements/useVisibility/) **(Function)** → Checks an element `visibility` within the viewport.

### Events

- [useClick](src/events/useClick/) **(Function + Directive)** → Triggers custom actions on element `click`.
- [useClickOutside](src/events/useClickOutside/) **(Function)** → Detects clicks `outside` of an element.
- [useEvent](src/events/useEvent/) **(Function)** → Sets `event` on a specific target.

### Utilities

- [useOnMounted](src/utilities/useOnMounted/) **(Function)** → Checks if `onMounted` hook is called inside of a component lifecycle.
- [useUnref](src/utilities/useEvent/) **(Function)** → Checks the `ref` value.

### Plugin

- [VueNex](src/plugin/) **(App-level)** → Activates all `directives` globally.

## License 📃

### VueNex

[MIT License](LICENSE)

Copyright © Ivo Dolenc

Developed in Croatia 🇭🇷
