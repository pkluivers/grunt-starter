module.exports = {
	scsslint: {
    allFiles: [
      '<%= path_src %>scss/**/*.scss',
    ],
    options: {
      bundleExec: false,
      config: '.scss-lint.yml',
      colorizeOutput: true
    },
  }
}