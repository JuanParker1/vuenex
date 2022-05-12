require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'eslint-config-prettier'
  ],

  ignorePatterns: ['node_modules', 'dist', 'dist-ssr', 'docs']
}
