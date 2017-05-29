module.exports = {
	css: {
	  files: 'assets/dev/scss/**/*.scss',
	  tasks: [ 'sass:dev' ],
	  options: { livereload: true }
	},
	scripts: {
		files: 'assets/dev/js/**/*.js',
	  	tasks: [ 'uglify' ],
	  	options: { 
	  		livereload: true,
	  		spawn: false
	  	}
	}
}
