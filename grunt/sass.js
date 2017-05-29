module.exports = {
  dev: {
    options: {
      sourceMap: true
    },
    files: { 'assets/dev/css/style.css' : 'assets/dev/scss/style.scss' }
  },
  prod: {
    options: {
      sourceMap: false,
      outputStyle: 'compressed'
    },
    files: { 'assets/prod/css/style.css' : 'assets/dev/scss/style.scss' }
  }
}
