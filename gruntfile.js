module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      uses_defaults: {}
    },

    sass: require('./grunt/sass.js'),

    watch: require('./grunt/watch.js'),

    uglify: require('./grunt/uglify.js'),

    imagemin: require('./grunt/imagemin.js')

  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // grunt.loadNpmTasks('grunt-postcss');

  // Default task(s).
  grunt.registerTask('default', [
  	'connect',
  	'watch'
  ]);

  grunt.registerTask('production', [
  	'sass:prod',
  	'uglify'
  ]);

};