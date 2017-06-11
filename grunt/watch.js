module.exports = {
	css: {
	  files: 'src/assets/scss/**/*.scss',
	  tasks: [ 'sass:src', 'postcss:prefix', 'scsslint' ],
	  options: { livereload: true }
	},
	scripts: {
		files: 'src/assets/js/**/*.js',
	  	tasks: [ 'uglify' ],
	  	options: { 
	  		livereload: true,
	  		spawn: false
	  	}
	},
	imagemin: {
		files: ['src/assets/img/**/*.{png,jpg,gif,svg,jpeg,JPG}'],
		tasks: ['imagemin'],
		options: {
			spawn: false
		}
	}
}
