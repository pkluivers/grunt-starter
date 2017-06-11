module.exports = {
	scsslint: {
    allFiles: [
      'src/assets/scss/**/*.scss',
    ],
    options: {
      bundleExec: false,
      config: '.scss-lint.yml',
      colorizeOutput: true
    },
  }
}