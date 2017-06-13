module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    path_src: './src/assets/',
    path_public: './public/assets/',


    /* Require tasks
     ------------------------------------------------------------------------- */

    sass: require('./grunt/sass.js'),

    watch: require('./grunt/watch.js'),

    uglify: require('./grunt/uglify.js'),

    imagemin: require('./grunt/imagemin.js'),

    postcss: require('./grunt/postcss.js'),

    scsslint: require('./grunt/scsslinter.js')

  });


  /* Serveral tasks
     ------------------------------------------------------------------------- */

  grunt.registerTask('default', [
    'sass',
    'postcss:prefix',
    'uglify',
    'imagemin',
    'watch'
  ]);

  grunt.registerTask('watch', [
    'watch'
  ]);
  
};