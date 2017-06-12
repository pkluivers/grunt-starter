module.exports = {
  src: {
    options: {
      sourceMap: true,
      outputStyle: 'compressed'
    },
    files: { '<%= path_public %>css/main.css' : '<%= path_src %>scss/main.scss' }
  }
}
