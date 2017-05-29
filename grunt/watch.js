module.exports = {
	css: {
	  files: 'assets/dev/scss/**/*.scss',
	  tasks: [ 'sass:dev', 'postcss' ],
	  options: { livereload: true }
	},
	scripts: {
		files: 'assets/dev/js/**/*.js',
	  	tasks: [ 'uglify' ],
	  	options: { 
	  		livereload: true,
	  		spawn: false
	  	}
	},
	imagemin: {
		files: ['assets/dev/img/**/*.{png,jpg,gif,svg,jpeg,JPG}'],
		tasks: ['imagemin:dynamic'],
		options: {
			spawn: false
		}
	}
}
