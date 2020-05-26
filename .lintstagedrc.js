module.exports = {
  "src/**/*.js": files => [
    `eslint "${files.join('" "')}"`,
    'grunt js',
    'git add javascripts/'
  ],
  "src/**/*.scss": files => [
    `stylelint "${files.join('" "')}"`,
    'grunt css',
    'git add stylesheets/ plugins/'
  ],
}
