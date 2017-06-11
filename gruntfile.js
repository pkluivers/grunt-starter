module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      uses_defaults: {}
    },

    sass: require('./grunt/sass.js'),

    watch: require('./grunt/watch.js'),

    uglify: require('./grunt/uglify.js'),

    imagemin: require('./grunt/imagemin.js'),

    postcss: require('./grunt/postcss.js'),

    scsslint: require('./grunt/scsslinter.js')

  });

  // Default task(s).
  grunt.registerTask('default', [
  	'connect',
  	'watch'
  ]);

  grunt.registerTask('production', [
  	'sass',
    'postcss:prefix',
  	'uglify'
  ]);

};